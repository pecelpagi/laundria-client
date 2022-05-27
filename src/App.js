import React, { lazy, useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppProvider from './provider';
import MainLayout from './mainlayout';
import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import { getToken } from './utils';

const LoginPage = lazy(() => import('./pages/Login'));
const LogoutPage = lazy(() => import('./pages/Logout'));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route
                path="/signin"
                render={(props) => getToken() ? (<Redirect to='/dashboard' />) : (<LoginPage {...props} />)}
              />
              <Route path="/signout" component={LogoutPage} />
              <Route path="/">
                <MainLayout />
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
