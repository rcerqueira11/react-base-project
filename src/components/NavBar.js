import React, { Component } from 'react'
import { NavLink, Route, Switch } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/" activeStyle={activeStyle}>About</NavLink>
        </div>
      </div>
    )
  }
}
