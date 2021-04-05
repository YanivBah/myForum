import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./topicthreads.css";


const TopicThreads = ({topic,users}) => {
  const { threads } = topic;
  const {topicID} = useParams();
  return threads.map(thread => {
    const creator = users.find((user) => user.id === thread.createdBy);
    return (
      <div className="thread-row" key={`thread${thread.id}`}>
        <div className="avatar"></div>
        <div className="info">
          <div className="title">
            <span className="tag">{thread.tag === "NoTag" ? "" : thread.tag}</span>
            <Link to={`/topic/${topicID}/thread/${thread.id}`}>
              {thread.title}
            </Link>
            <br />
            <Link className="writer" to={`/users/${creator.id}`}>
              {creator.username}
            </Link>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  });
}

export default TopicThreads;
