import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import AppProvider from './provider';
import MainLayout from './mainlayout';
import LoginPage from './pages/Login';
import LogoutPage from './pages/Logout';
import ErrorBoundary from './components/ErrorBoundary';
import { getToken } from './utils';
import NotFoundPage from './pages/NotFoundPage';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route path="/notfound">
              <NotFoundPage />
            </Route>
            <Route
              path="/signin"
              render={(props) => getToken() ? (<Redirect to='/dashboard' />) : (<LoginPage {...props} />)}
            />
            <Route path="/signout" component={LogoutPage} />
            <Route path="/">
              <MainLayout />
            </Route>
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
