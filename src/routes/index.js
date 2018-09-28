import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/home/HomePage'
import App from '../components/App'
import Dashboard from '../components/dashboard/Dashboard'
import NotFoundPage from '../components/errorPage/NotFoundPage'
import LoginPage from '../components/login/LoginPage'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/App" component={App} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default routes