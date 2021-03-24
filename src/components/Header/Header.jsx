import React from "react";
import './header.css';
// import axios from "axios";

class Header extends React.Component {

  createLinks = () => {
    const array = [
      { name: "Home", icon: "home" },
      { name: "Users", icon: "group" },
      { name: "Contact Us", icon: "contact_support " },
      { name: "Login", icon: "account_circle" },
    ];
    return array.map((link, index) => {
      return (
        <li key={`nav${index}`}>
          <a href={`/${link.name.toLowerCase().replace(' ','')}`}>
            <span className="material-icons">{link.icon}</span>
            {link.name}
          </a>
        </li>
      );
    })
  }

  render() {
    console.log(this.props);
    return (
      <header>
        <div className="logo">
          <h2>
            <span className="material-icons">mode_comment</span>
            {this.props.name}
          </h2>
        </div>
        <nav>
          <ul>{this.createLinks()}</ul>
        </nav>
      </header>
    );
  }
}

export default Header;