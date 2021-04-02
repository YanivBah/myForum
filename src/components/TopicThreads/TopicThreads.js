import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./topicthreads.css";


const TopicThreads = ({topic,users}) => {
  const { threads } = topic;
  console.log("🚀 ~ file: TopicThreads.js ~ line 7 ~ TopicThreads ~ users", users)
  console.log("🚀 ~ file: TopicThreads.js ~ line 8 ~ TopicThreads ~ threads", threads)
  
  return threads.map(thread => {
    const creator = users.find((user) => user.id === thread.createdBy);
    return (
      <div className="thread">
        <div className="avatar"></div>
        <span className="tag">{thread.tag}</span>
        <div className="title">
          {thread.title}
          <br/>
          <Link to={`/users/${creator.id}`}>{creator.username}</Link>
        </div>
        <div className="divider"></div>
      </div>
    );
  });
}

export default TopicThreads;
