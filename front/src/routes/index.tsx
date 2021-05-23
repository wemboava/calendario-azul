import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import SessionService from '../services/session';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Routine from '../pages/Routine';
import Game from '../pages/Game';

interface IProps extends RouteProps {
  component: React.ComponentType<any>
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, ...rest }) => (
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

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/rotina/:id" component={Routine} />
        <Route exact path="/rotina/game/:id" component={Game} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router