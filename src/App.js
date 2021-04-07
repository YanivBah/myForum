import React, { useState, useEffect } from "react";
import api from './api';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import options from './options';

import Home from './pages/Home';
import Topic from './pages/Topic';
import Thread from './pages/Thread';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';


import { newThread, registerAccount, updateAccount } from "./utilites/crudFuncs";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [topics, setTopics] = useState([]);
  const [users, setUsers] = useState([]);
  const [redirect, setRedirect] = useState(null);

  const fetchData = async () => {
    const users = await api.get("users");
    setUsers(users.data);
    const data = await api.get("topics");
    setTopics(data.data);
  };

  const SignIn = async (profile) => {
    const users = await api.get("users");
    const user = users.data.find(user => user.googleId === profile.googleId);
    user ? setLoggedIn(user) : registerAccount(profile);
  }

  // const createNewTopic = (e) => {
  //   const topic = e.target.parentElement.children[1].children[1].value;
  //   const description = e.target.parentElement.children[2].children[1].value;
  //   const image = e.target.parentElement.children[3].children[1].value;
  //   const newTopic = {
  //     title: topic,
  //     description: description,
  //     image: image,
  //     threads: [],
  //   };
  //   api.post("topics", newTopic);
  // };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch />
        {redirect && <Redirect to={redirect} />}
        <Header
          name="myForum"
          settings={options.header}
          loggedIn={loggedIn}
          SignIn={SignIn}
          setLoggedIn={setLoggedIn}
        />

        {/* Homepage */}
        <Route path="/" exact>
          <Home topics={topics} users={users} />
        </Route>

        {/* Topic */}
        <Route path="/topic/:topicID" exact>
          <Topic topics={topics} users={users} loggedIn={loggedIn} />
        </Route>

        {/* Thread */}
        <Route path="/topic/:topicID/thread/:threadID" exact>
          <Thread
            topics={topics}
            users={users}
            update={fetchData}
            loggedIn={loggedIn}
          />
        </Route>

        {/* Users */}
        <Route path="/users" exact>
          <Users users={users} />
        </Route>

        {/* Report */}
        <Route path="/report" exact>
          {/* <Form settings={options.forms.newTopic} /> */}
        </Route>

        {/* Report */}
        <Route path="/dashboard" exact>
          <Dashboard
            settings={options.forms.dashboard}
            loggedIn={loggedIn}
            func={updateAccount}
            update={fetchData}
            setRedirect={setRedirect}
          />
        </Route>

        {/* CreateThread */}
        <Route path="/topic/:topicID/newthread" exact>
          <Form
            settings={options.forms.newThread}
            func={newThread}
            update={fetchData}
            setRedirect={setRedirect}
            loggedIn={loggedIn}
          />
        </Route>
        <Switch />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
