import React from 'react';
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
  return null;
};

export default Dashboard;
