import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom'
import TopicThreads from "../TopicThreads/TopicThreads";
import './topicpage.css';

const TopicPage = ({topics}) => {
  const {topicID} = useParams();
  const { pathname } = useLocation();
  const topic = topics.find(topic => topic.id === topicID);
  if (topic) {
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
            <span>username</span>
            {topic.moderators.map((mod) => (
              <span>{mod}</span>
            ))}
          </div>
        </div>
        <TopicThreads topic={topic}/>
      </div>
    );
  }
  return null;
}

export default TopicPage;
