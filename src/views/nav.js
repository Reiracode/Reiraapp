import React from 'react';

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <NavLink className="nav-item" to="/about">
        About
      </NavLink>
      <NavLink className="nav-item" to="/resume">
        Résumé
      </NavLink>
      <NavLink className="nav-item" to="/">
        Home
      </NavLink>
    </nav>
  );
}

export default Nav;