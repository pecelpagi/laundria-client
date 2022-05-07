import React, { lazy} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppContext from './Context'
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { getToken } from "../utils";

const DashboardPage = lazy(() => import('../pages/Dashboard'));
const TransactionPage = lazy(() => import('../pages/Transaction'));

const MainLayout = () => (
    <AppContext>
        <div className="relative left-0 sm:left-60 top-24">
            <Switch>
                <Route
                    exact path="/"
                    render={() => !getToken() ? (<Redirect to='/signin' />) : (<Redirect to='/dashboard' />)}
                />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/transaction" component={TransactionPage} />
            </Switch>
        </div>
        <SideMenu />
        <Header />
    </AppContext>
);

export default MainLayout;
