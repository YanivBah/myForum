// import axios from 'axios';
import React, { useState, useEffect } from 'react'
import api from './api';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import TopicDisplay from './components/TopicDisplay/TopicDisplay';
import Form from './components/Form/Form';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchData = async () => {
    const data = await api.get("topics");
     console.log(data);
  };

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

  const createNewThread = () => {};
  
  const registerAccount = () => {};
  
  useEffect(() => fetchData(), []);

  const forms = [
    {
      header: "Create New Topic",
      buttonText: "Create",
      onClick: createNewTopic,
      inputs: [
        { name: "topic", title: "Topic" },
        { name: "description", title: "Description" },
        { name: "image", title: "Image Location" },
      ],
    },
  ];


  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch />
        <Header name="myForum" />
        <Route path="/home" exact>
          <TopicDisplay />
        </Route>
        <Route path="/login" exact>
          <div>You not logged in</div>
        </Route>
        <Route path="/contactus" exact>
          <Form details={forms[0]} />
        </Route>
        <Switch />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
