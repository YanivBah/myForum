// import axios from 'axios';
import React, { useState, useEffect, Component } from "react";
import api from './api';
import { BrowserRouter, Route, Link, Switch, useLocation } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import TopicDisplay from './components/TopicDisplay/TopicDisplay';
import Form from './components/Form/Form';
import TopicPage from "./components/TopicPage/TopicPage";
import { Editor } from "@tinymce/tinymce-react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [topics, setTopics] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const users = await api.get("users");
    setUsers(users.data);
    const data = await api.get("topics");
     setTopics(data.data);
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

  const createNewThread = async () => {
    const {data} = await api.get("topics");
    const topic = data.find(topic => topic.id === "1");
    const thread = {
      tag: "Help",
      title: "I need to help to install ubuntu",
      content: "Please help me to install ubuntu with dualboot windows",
      createdBy: "1",
      editedAt: null,
      id: `1`,
      posts: [],
    };
    topic.threads.push(thread);
    api.put(`topics/${topic.id}`, topic);
    console.log('Created new thread');
    fetchData();
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

  // useEffect(() => {
  //   createNewThread();
  // }, []);

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
    {
      header: "Create New Thread",
      buttonText: "Create",
      onClick: createNewThread,
      inputs: [
        { name: "Tag", title: "Tag" },
        { name: "title", title: "Title" },
        { name: "content", title: "Content" },
      ],
    },
  ];


  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch />
        <Header name="myForum" />
        <div>
          {/* <Editor
            apiKey="2viqoomhb51lmkju04axbr2u0tvkmoc0g51wpfiuhbxs9vi3"
            cloudChannel="5-stable"
            disabled={false}
            id="uuid"
            init={{}}
            initialValue=""
            inline={false}
            onEditorChange={console.log("howdy")}
            plugins=""
            tagName="div"
            textareaName=""
            toolbar=""
            value=""
          /> */}
        </div>
        {/* Topic at homepage */}
        <Route path="/home" exact>
          <TopicDisplay topics={topics} />
        </Route>
        {/* Topic Page */}
        <Route path="/topic/:topicID" exact>
          <TopicPage topics={topics} users={users} />
        </Route>
        {/* Login page */}
        <Route
          path="/login"
          exact
          render={(props) => <div>You not logged in</div>}
        />
        {/* CreateTopic page */}
        <Route
          path="/contactus"
          exact
          render={(props) => <Form details={forms[0]} />}
        />
        {/* CreateThread page */}
        <Route path="/topic/:topicID/newthread" exact>
          <Form details={forms[1]} />
        </Route>
        <Switch />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
