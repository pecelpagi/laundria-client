import React, { useContext, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { styled } from '../stitches.config';
import PrivateRoute from './PrivateRoute';
import AppContext, { ComponentContext } from './Context'
import Layout from './Layout';
import Header from './Header';
import SideMenu from './SideMenu';
import { getToken } from "../utils";
import Spinner from '../components/Spinner';
import rawMenuData from './menuData';

const StyledWrapper = styled('div', {
    width: '100%',
    left: '0px',

    variants: {
        showedMenu: {
            true: {
                '@lg': {
                    width: 'calc(100% - 250px)',
                    left: '205px',
                },
            }
        }
    },
});

const Wrapper = ({ children }) => {
    const { isShowingSidebarMenu } = useContext(ComponentContext);

    return <StyledWrapper className="relative top-24 transition-all" showedMenu={isShowingSidebarMenu}>{children}</StyledWrapper>
}

const menuData = [];

rawMenuData.forEach((x) => {
    const component = x.component;

    menuData.push({ path: x.path, component });
});

const NoMatch = (props) => {
    return (
        <Redirect
            to={{
                pathname: "/notfound",
                search: `?page=${props.location.pathname}`,
                state: { referrer: props.location }
            }}
        />
    )
}

const LayoutRoutes = (props) => {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route
                    exact path="/"
                    render={() => !getToken() ? (<Redirect to='/signin' />) : (<Redirect to='/dashboard' />)}
                />
                {menuData.map(x => <PrivateRoute {...props} key={x.path} path={x.path} component={x.component} />)}
                <Route path="*" component={NoMatch} />
            </Switch>
        </Suspense>
    )
}

const MainLayout = () => {
    return (
        <AppContext>
            <Wrapper>
                <div className="relative px-0 pl-5 sm:mx-auto" style={{ maxWidth: '1280px', minHeight: (window.innerHeight - 69) }}>
                    <Layout>
                        <LayoutRoutes />
                    </Layout>
                </div>
            </Wrapper>
            <Header />
            <SideMenu />
        </AppContext>
    );
};

export default MainLayout;
