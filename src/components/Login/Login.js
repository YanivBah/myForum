import React from 'react';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import './login.css';
const clientID = `267488506864-gqm7gmbm42rc3vnekeqv4sv11t2jqqus.apps.googleusercontent.com`;

export const Login = ({ SignIn }) => {
  const onSuccess = (res) => {
    SignIn(res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login Failed]");
  };

  return (
    <GoogleLogin
      clientId={clientID}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
      render={(renderProps) => (
        <li onClick={renderProps.onClick} className="login-btn">
          <img src="/assets/GoogleLogo.svg" alt="" />
          Login
        </li>
      )}
    />
  );
};

export const Logout = ({ setLoggedIn }) => {
  const onSuccess = () => {
    setLoggedIn(null);
  };

  return (
    <GoogleLogout
      clientId={clientID}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
      render={(renderProps) => (
        <li onClick={renderProps.onClick} className="login-btn">
          <img src="/assets/GoogleLogo.svg" alt="" />
          Logout
        </li>
      )}
    />
  );
};

