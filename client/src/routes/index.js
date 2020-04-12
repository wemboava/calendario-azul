import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SessionService from '../services/session';
import Login from '../pages/Login';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';

export default function Router() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        SessionService.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}
