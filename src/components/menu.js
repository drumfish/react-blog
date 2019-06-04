import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/logo.svg'

class Menu extends Component {
  render() {
    return (
      <>
        <div className="menu">
          <div className="logo"><img src={logo} alt="logo"/></div>
          <div>
            <NavLink className={'menu_link'} activeClassName={'active'} to="/" exact>Blog</NavLink>
            <NavLink className={'menu_link'} activeClassName={'active'} to="/about">About</NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
