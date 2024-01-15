import React, { lazy, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { styled } from '../stitches.config';
import PrivateRoute from './PrivateRoute';
import AppContext, { ComponentContext } from './Context'
import Layout from './Layout';
import Header from './V2Header';
import SideMenu from './V2SideMenu';
import { getToken } from "../utils";

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

const DashboardPage = lazy(() => import('../pages/Dashboard'));
const TransactionPage = lazy(() => import('../pages/Transaction/TransactionList'));
const CreateTransactionPage = lazy(() => import('../pages/Transaction/CreateTransaction'));
const UpdateTransactionPage = lazy(() => import('../pages/Transaction/UpdateTransaction'));
const CustomerPage = lazy(() => import('../pages/Customer'));
const LaundryPackagePage = lazy(() => import('../pages/LaundryPackage'));
const PaymentTypePage = lazy(() => import('../pages/PaymentType'));
const EmployeePage = lazy(() => import('../pages/Employee'));
const IdentityPage = lazy(() => import('../pages/Identity'));
const MyProfilePage = lazy(() => import('../pages/MyProfile'));
const GlobalSearchPage = lazy(() => import('../pages/GlobalSearch'));

const MainLayout = () => {
    return (
        <AppContext>
            <Wrapper>
                <div className="relative px-0 pl-5 sm:mx-auto" style={{ maxWidth: '1280px' }}>
                    <Switch>
                        <Route
                            exact path="/"
                            render={() => !getToken() ? (<Redirect to='/signin' />) : (<Redirect to='/dashboard' />)}
                        />
                        <Layout>
                            <PrivateRoute path="/dashboard" component={DashboardPage} />
                            <PrivateRoute path="/transaction/detail/:id" component={UpdateTransactionPage} />
                            <PrivateRoute path="/transaction/create" component={CreateTransactionPage} />
                            <PrivateRoute exact path="/transaction" component={TransactionPage} />
                            <PrivateRoute path="/customer" component={CustomerPage} />
                            <PrivateRoute path="/laundry-package" component={LaundryPackagePage} superadminOnly />
                            <PrivateRoute path="/payment-type" component={PaymentTypePage} superadminOnly />
                            <PrivateRoute path="/employee" component={EmployeePage} superadminOnly />
                            <PrivateRoute path="/identity" component={IdentityPage} superadminOnly />
                            <PrivateRoute path="/my-profile" component={MyProfilePage} />
                            <PrivateRoute path="/search" component={GlobalSearchPage} />
                        </Layout>
                    </Switch>
                </div>
            </Wrapper>
            <Header />
            <SideMenu />
        </AppContext>
    );
};

export default MainLayout;
