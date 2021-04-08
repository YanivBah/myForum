import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {Login, Logout} from '../Login/Login';
import './header.css';

const Header = ({ settings, loggedIn, SignIn, setLoggedIn }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  },[])
  
  useEffect(() => {
    setopenMenu(width > 800);
  },[width])
  const [openMenu, setopenMenu] = useState(width > 800);

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
      <Link to="/">
        <div className="logo">
          <h2>
            <span className="material-icons">mode_comment</span>
            {settings.logo}
          </h2>
        </div>
      </Link>
      <nav>
        <ul>
          <li className="menu" onClick={() => setopenMenu(!openMenu)}>
            <div className="menu-a">
              <span className="material-icons">
                {openMenu ? "cancel" : "menu"}
              </span>
              {openMenu ? "Hide Menu" : "Show Menu"}
            </div>
          </li>
          {openMenu && createLinks()}
          {openMenu &&
            loggedIn !== null &&
            settings.loggedIn.map(({ name, icon, link }, index) => {
              return (
                <li key={`nav${index}`}>
                  <Link to={link}>
                    <span className="material-icons">{icon}</span>
                    {name}
                  </Link>
                </li>
              );
            })}
          {openMenu &&
            loggedIn?.settings?.admin &&
            settings.admin.map(({ name, icon, link }, index) => {
              return (
                <li key={`nav${index}`}>
                  <Link to={link}>
                    <span className="material-icons">{icon}</span>
                    {name}
                  </Link>
                </li>
              );
            })}
          {openMenu &&
            (loggedIn === null ? (
              <Login SignIn={SignIn} />
            ) : (
              <Logout setLoggedIn={setLoggedIn} />
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;