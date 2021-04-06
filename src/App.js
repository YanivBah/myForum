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

import { newThread } from "./utilites/crudFuncs";

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
    user ? setLoggedIn(user) : register(profile);
  }

  const register = (profile) => {
    const user = {
      username: `${profile.name.replace(" ", "")}`,
      avatar: profile.imageUrl,
      email: profile.email,
      moderator: [],
      settings: {
        hideEmail: false,
        hidePosts: false,
        hideThreads: false,
      },
      googleId: profile.googleId,
    };
    api.post("users", user);
  }

  const createNewTopic = (e) => {
    const topic = e.target.parentElement.children[1].children[1].value;
    const description = e.target.parentElement.children[2].children[1].value;
    const image = e.target.parentElement.children[3].children[1].value;
    const newTopic = {
      title: topic,
      description: description,
      image: image,
      threads: [],
    };
    api.post("topics", newTopic);
  };

  const registerAccount = () => {
    const user = {
      username: "Yaniv",
      avatar: "1",
      email: "ybahalker@gmail.com",
      password: "1234",
      moderator: ["1","2","3","4"],
      settings: {
        hideEmail: true,
        hidePosts: true,
        hideThreads: true,
      },
    };
    api.post("users", user);
    console.log('registered');
  };
  
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
        />

        {/* Homepage */}
        <Route path="/" exact>
          <Home topics={topics} />
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

        {/* Login */}
        <Route path="/login" exact>
          <div>You not logged in</div>
        </Route>

        {/* CreateTopic */}
        <Route path="/contactus" exact>
          <Form settings={options.forms.newTopic} />
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
