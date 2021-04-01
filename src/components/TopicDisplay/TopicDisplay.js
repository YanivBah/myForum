import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import './topicdisplay.css';

const array = [
  {
    id: "1",
    title: "General",
    description: "Here you can talk about everything.",
    image: "./img/general-icon.png",
    threads: [],
  },
  {
    id: "1",
    title: "General",
    description: "Here you can talk about everything.",
    image: "./img/general-icon.png",
  },
  {
    id: "1",
    title: "General",
    description: "Here you can talk about everything.",
    image: "./img/general-icon.png",
  },
  {
    id: "1",
    title: "General",
    description: "Here you can talk about everything.",
    image: "./img/general-icon.png",
  },
  {
    id: "1",
    title: "General",
    description: "Here you can talk about everything.",
    image: "./img/general-icon.png",
  },
  {
    id: "1",
    title: "General",
    description: "Here you can talk about everything.",
    image: "./img/general-icon.png",
  },
];

const TopicDisplay = props => {
  return array.map(({ title, description, image },index) => {
    return (
      <div className="topic-display" key={`topic${index}`}>
        <Link to={`/topic/${title.toLowerCase()}`}>
          <img
            src="https://source.unsplash.com/featured/?conversation"
            alt="topic avatar"
          />
        </Link>
        <div className="topic-details">
          <Link to={`/topic/${title.toLowerCase()}`}>
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
        </div>
        <div className="topic-last-post">
          <h4>
            Welcome to our new community
            <span className="material-icons">navigate_next</span>
          </h4>
          <div className="row">
            <h4>Posted by</h4>
            <span>username</span>
          </div>
          <div className="row">
            <h4>Updated at</h4>
            <span>24/3/2021 - 13:28</span>
          </div>
        </div>
      </div>
    );
  });
}

export default TopicDisplay;