import React, { lazy, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { styled } from '../stitches.config';
import PrivateRoute from './PrivateRoute';
import AppContext, { ComponentContext } from './Context'
import Layout from './Layout';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { getToken } from "../utils";

const StyledWrapper = styled('div', {
    width: '100%',
    left: '0px',

    variants: {
        showedMenu: {
            true: {
                '@sm': {
                    width: 'calc(100% - 250px)',
                    left: '230px',
                },
            }
        }
    },
});

const Wrapper = ({ children }) => {
    const { isShowingSidebarMenu } = useContext(ComponentContext);

    return <StyledWrapper className="relative top-20 transition-all" showedMenu={isShowingSidebarMenu}>{children}</StyledWrapper>
}

const DashboardPage = lazy(() => import('../pages/Dashboard'));
const TransactionPage = lazy(() => import('../pages/Transaction'));
const CustomerPage = lazy(() => import('../pages/CustomerV2'));

const MainLayout = () => {
    return (
        <AppContext>
            <Wrapper>
                <div className="relative px-5 sm:mx-auto" style={{ maxWidth: '1080px' }}>
                    <Switch>
                        <Route
                            exact path="/"
                            render={() => !getToken() ? (<Redirect to='/signin' />) : (<Redirect to='/dashboard' />)}
                        />
                        <Layout>
                            <PrivateRoute path="/dashboard" component={DashboardPage} />
                            <PrivateRoute path="/transaction" component={TransactionPage} />
                            <PrivateRoute path="/customer" component={CustomerPage} />
                        </Layout>
                    </Switch>
                </div>
            </Wrapper>
            <SideMenu />
            <Header />
        </AppContext>
    );
};

export default MainLayout;
