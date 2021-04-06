import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {Login, Logout} from '../Login/Login';
import './header.css';

const Header = ({ settings, loggedIn, SignIn }) => {
  const createLinks = () => {
    return settings.links.map(({ name, icon, link }, index) => {
      return (
        <li key={`nav${index}`}>
          <Link to={link}>
            <span className="material-icons">{icon}</span>
            {name}
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
          {settings.logo}
        </h2>
      </div>
      <nav>
        <ul>
          {createLinks()}
          <li>{loggedIn === null ? <Login SignIn={SignIn} /> : <Logout />}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;