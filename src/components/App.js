/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

// import AboutPage from "./AboutPage";
// import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./home/HomePage";
import NotFoundPage from "./errorPage/NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import routes from "../routes"
import { hot } from "react-hot-loader";
import Navbar from "./NavBar";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <Navbar />
        { routes }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
