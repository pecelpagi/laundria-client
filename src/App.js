import React, { lazy, useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppProvider from './provider';
import MainLayout from './mainlayout';
import ErrorBoundary from './components/ErrorBoundary';

const LoginPage = lazy(() => import('./pages/Login'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));
const TransactionPage = lazy(() => import('./pages/Transaction'));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<div />}>
            <Switch>
              <Route path="/signin" component={LoginPage} />
              <Route path="/">
                <MainLayout>
                  <Switch>
                    <Route
                      exact path="/"
                      render={() => (<Redirect to='/dashboard' />)}
                    />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/transaction" component={TransactionPage} />
                  </Switch>
                </MainLayout>
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
