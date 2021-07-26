import React from "react";
import { Link, NavLink } from "react-router-dom";
//the only difference between link and navlink is that with navlink we have classname as active and can be used for further styling of elements
const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
