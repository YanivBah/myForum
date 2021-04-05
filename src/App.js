import React, { useState, useEffect, Component } from "react";
import api from './api';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import TopicDisplay from './components/TopicDisplay/TopicDisplay';
import Form from './components/Form/Form';
import TopicPage from "./components/TopicPage/TopicPage";
import ThreadPage from "./components/ThreadPage/ThreadPage";
import options from './options';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [topics, setTopics] = useState([]);
  const [users, setUsers] = useState([]);
  const [redirect, setRedirect] = useState(null);

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

  const createNewThread = async (e,{topicID}) => {
    const {data} = await api.get("topics");
    const topic = data.find(topic => topic.id === topicID);
    const id =
      topic.threads.length === 0 ? "1" : `${parseInt(topic.threads[0].id) + 1}`;
    const thread = {
      tag: e[0].value,
      title: e[1].value,
      content: e[2].currentContent,
      createdAt: new Date(),
      createdBy: "1",
      editedAt: null,
      id: id,
      posts: [],
    };
    topic.threads.unshift(thread);
    api.put(`topics/${topicID}`, topic);
    await fetchData();
    setRedirect(`/topic/${topicID}/thread/${id}`);
  };

  const deleteThread = async (topicID,threadID) => {
    const { data } = await api.get("topics");
    const topic = data.find(topic => topic.id === topicID);
    const threadIndex = topic.threads.findIndex(thread => thread.id === threadID);
    topic.threads.splice(threadIndex,1);
    await api.put(`/topics/${topicID}`, topic);
    fetchData();
  }
  const editThread = async (topicID,threadID) => {
    const { data } = await api.get("topics");
    const topic = data.find((topic) => topic.id === topicID);
    
  }
  
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
        <Header name="myForum" settings={options.header} />
        {/* Topic at homepage */}
        <Route path="/" exact>
          <TopicDisplay topics={topics} />
        </Route>
        {/* Topic Page */}
        <Route path="/topic/:topicID" exact>
          <TopicPage topics={topics} users={users} />
        </Route>
        {/* Thread Page */}
        <Route path="/topic/:topicID/thread/:threadID" exact>
          <ThreadPage topics={topics} users={users} deleteFunc={deleteThread} />
        </Route>
        {/* Login page */}
        <Route path="/login" exact>
          <div>You not logged in</div>
        </Route>
        {/* CreateTopic page */}
        <Route path="/contactus" exact>
          <Form settings={options.forms.newTopic} />
        </Route>
        {/* CreateThread page */}
        <Route path="/topic/:topicID/newthread" exact>
          <Form settings={options.forms.newThread} func={createNewThread} />
        </Route>
        <Switch />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
