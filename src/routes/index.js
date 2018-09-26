import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/home/HomePage'
import App from '../components/App'
import NotFoundPage from '../components/errorPage/NotFoundPage'

const routes = (
  <div>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/App" component={App} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default routes