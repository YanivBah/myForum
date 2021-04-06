import React from 'react';
import { Link } from "react-router-dom";
import "./topicpreview.css";

const TopicPreview = ({topic, index}) => {
  const { title, description, id, threads } = topic;
    return (
      <div className="topic-display" key={`topic${index}`}>
        <Link to={`/topic/${id}`}>
          <img src={`./assets/topics/${id}.jpg`} alt="topic avatar" />
        </Link>
        <div className="topic-details">
          <Link to={`/topic/${id}`}>
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
        </div>
        <div className="topic-meta">
          <div>
            {threads.length >= 1000
              ? `${threads.length / 1000}k`
              : threads.length}
            <h4>Threads</h4>
          </div>
          <div>
            {threads.length >= 1000
              ? `${threads.length / 1000}k`
              : threads.length}
            <h4>Posts</h4>
          </div>
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
};

export default TopicPreview;