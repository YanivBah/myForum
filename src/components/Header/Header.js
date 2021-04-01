import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './header.css';

const Header = props => {
  const createLinks = () => {
    const array = [
      { name: "Home", icon: "home" },
      { name: "Users", icon: "group" },
      { name: "Contact Us", icon: "contact_support " },
      { name: "Login", icon: "account_circle" },
    ];
    return array.map((link, index) => {
      return (
        <li key={`nav${index}`}>
          <Link to={`/${link.name.toLowerCase().replace(" ", "")}`}>
            <span className="material-icons">{link.icon}</span>
            {link.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <header>
      <div className="logo">
        <h2>
          <span className="material-icons">mode_comment</span>
          {props.name}
        </h2>
      </div>
      <nav>
        <ul>{createLinks()}</ul>
      </nav>
    </header>
  );
}

export default Header;