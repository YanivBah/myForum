import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'
import TopicThreads from "../TopicThreads/TopicThreads";
import api from "../../api";
import './topicpage.css';

const TopicPage = ({topics, users}) => {
  const {topicID} = useParams();
  const { pathname } = useLocation();
  const topic = topics.find(topic => topic.id === topicID);
  const moderators = () => {
    return topic.moderators.map(mod => {
      const user = users.find(user => user.id === mod);
      return <Link to={`/users/${user.id}`}>{user.username}</Link>;
    })
  }

  if (topic && users) {
    return (
      <div className="topicpage">
        <div className="topic-header">
          <img src={`../assets/topics/${topicID}.jpg`} alt="topic avatar" />
          <div className="info">
            <h1>{topic.title}</h1>
            <p>{topic.description}</p>
            <div className="controls">
              <div className="btn">
                <Link to={pathname + "/newthread"}>
                  <span className="material-icons">add_circle_outline</span>
                  New Thread
                </Link>
              </div>
            </div>
          </div>
          <div className="moderators">
            <h3>Moderators</h3>
            {moderators()}
          </div>
        </div>
        <div className="container">
          <TopicThreads users={users} topic={topic} />
          <TopicThreads users={users} topic={topic} />
          <TopicThreads users={users} topic={topic} />
          <TopicThreads users={users} topic={topic} />
        </div>
      </div>
    );
  }
  return null;
}

export default TopicPage;
