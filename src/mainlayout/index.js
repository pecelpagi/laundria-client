import React, { Suspense, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { styled } from '../stitches.config';
import PrivateRoute from './PrivateRoute';
import Layout from './Layout';
import Header from './Header';
import SideMenu from './SideMenu';
import { getToken } from "../utils";
import Spinner from '../components/Spinner';
import rawMenuData from './menuData';
import MainLayoutProvider from './MainLayoutProvider';
import moment from 'moment';
import Box from '../components/Box';
import MainLayoutContext from './MainLayoutContext';

const StyledWrapper = styled('div', {
    width: '100%',
    left: '0px',
    padding: '0px 25px',
    variants: {
        showedMenu: {
            true: {
                '@lg': {
                    width: 'calc(100% - 240px)',
                    left: '205px',
                    padding: '0px',
                    paddingLeft: 12,
                },
            }
        }
    },
});

const Wrapper = ({ children }) => {
    const { isShowingSidebarMenu } = useContext(MainLayoutContext);

    return <StyledWrapper className="relative top-24 transition-all" showedMenu={isShowingSidebarMenu}>{children}</StyledWrapper>;
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

const RouteSpinner = () => {
    return (
        <Box
            css={{
                '.spinner-overlay': {
                    background: '#f1f1f4',
                }
            }}
        >
            <Spinner />
        </Box>
    )
}

const LayoutRoutes = (props) => {
    return (
        <Suspense fallback={<RouteSpinner />}>
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
        <MainLayoutProvider>
            <Wrapper className="relative sm:mx-auto" style={{ maxWidth: '1392px', minHeight: (window.innerHeight - 69) }}>
                <Layout>
                    <LayoutRoutes />
                </Layout>
                <Box
                    className='mt-14 pb-8'
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr'
                    }}
                >
                    <Box>
                        <h5>Copyright &copy; {moment().format('YYYY')} <a target='_blank' href="https://galuhrmdh.com" rel="noreferrer">galuhrmdh.com</a></h5>
                    </Box>
                    <Box
                        className='text-right'
                    >
                        <h5>Made with&nbsp;&nbsp;❤️&nbsp;&nbsp;from Indonesia.</h5>
                    </Box>
                </Box>

            </Wrapper>
            <Header />
            <SideMenu />
        </MainLayoutProvider>
    );
};

export default MainLayout;
