import React, { lazy, useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppProvider from './provider';
import MainLayout from './mainlayout';
import ErrorBoundary from './components/ErrorBoundary';

const LoginPage = lazy(() => import('./pages/Login'));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<div />}>
            <Switch>
              <Route path="/signin" component={LoginPage} />
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
