import React from 'react';
// import axios from 'axios';
import api from './api';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import TopicDisplay from './components/TopicDisplay/TopicDisplay';
import Form from './components/Form/Form';

class App extends React.Component {
  state = {loggedIn: false};
  fetching = async () => {
    // const deleting = await axios.delete(
    //   "https://605ae66727f0050017c05733.mockapi.io/topics/3"
    // );
    // console.log(deleting);
    // const data = await axios.get(
    //   "https://605ae66727f0050017c05733.mockapi.io/topics"
    // );
    // console.log(data);
    // const topic = {
    //   title: "Funny",
    //   description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, rerum?",
    //   image: "./img/funny-icon.png",
    // };
    // const post = await axios.post("https://605ae66727f0050017c05733.mockapi.io/topics", topic);
    // console.log(post);
    // const name = { createdAt: new Date(), username: "Yaniv", avatar: 'link', email: 'lalala@gmail.com'};
    // const post = await axios.post("https://605ae66727f0050017c05733.mockapi.io/users", name);
    // console.log(post);
    // const data1 = await axios.get(
    //   "https://605ae66727f0050017c05733.mockapi.io/users"
    // );
    // console.log(data1);
    const data = await api.get("topics");
    console.log(data);
  };

  componentDidMount() {
    this.fetching();
  }

  createNewTopic = (e) => {
    const topic = e.target.parentElement.children[1].children[1].value;
    const description = e.target.parentElement.children[2].children[1].value;
    const image = e.target.parentElement.children[3].children[1].value;
    const newTopic = {
      title: topic,
      description: description,
      image: image,
      threads: [],
    };
    api.post('topics', newTopic);
  };

  createNewThread = () => {};

  registerAccount = () => {};

  render() {
    const forms = [
      {
        header: "Create New Topic",
        buttonText: "Create",
        onClick: this.createNewTopic,
        inputs: [
          { name: "topic", title: "Topic" },
          { name: "description", title: "Description" },
          { name: "image", title: "Image Location" },
        ],
      },
    ];

    return (
      <React.Fragment>
        <Header name="myForum" />

        <BrowserRouter>
          <Route path="/home" exact>
            <TopicDisplay />
          </Route>
          <Route path="/login" exact>
            <div>You not logged in</div>
          </Route>
          <Route path="/contactus" exact>
            <Form details={forms[0]}/>
          </Route>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
