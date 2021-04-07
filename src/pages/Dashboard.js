import React, { useState, useEffect } from 'react';
import Switch from "../components/Switch/Switch";
import Form from "../components/Form/Form";
import './css/dashboard.css';
const Dashboard = ({ settings,loggedIn, func, update, setRedirect }) => {
  if (loggedIn !== null) {
    settings.elements[0].defaultValue = loggedIn.username;
    settings.elements[1].defaultValue = loggedIn.avatar;
    return (
      loggedIn !== null && (
        <Form
          settings={settings}
          func={func}
          update={update}
          setRedirect={setRedirect}
          loggedIn={loggedIn}
        />
      )
    );
  } 
  setRedirect("/");
  return null;
};

export default Dashboard;
