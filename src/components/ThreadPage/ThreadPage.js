import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from "moment";
import parse from "html-react-parser";
import "./threadpage.css";

const ThreadPage = ({topics, users}) => {
  const {topicID, threadID} = useParams();

  const comments = () => {

  }

  if (topics.length) {
    const topic = topics.find(topic => topic.id === topicID);
    const thread = topic.threads.find(thread => thread.id === threadID);
    console.log(thread);
    const user = users.find(user => user.id === thread.createdBy)
    console.log(user);
    moment.locale("en", {
      calendar: {
        lastDay: "[Yesterday at] H:m",
        sameDay: "[Today at] H:m",
        nextDay: "[Tomorrow at] H:m",
        lastWeek: "[last] dddd [at] H:m",
        nextWeek: "dddd [at] H:m",
        sameElse: "DD/MM/YYYY - H:m",
      },
    });
    return (
      <div className="thread">
        <h1 className="title">
          <span className="tag">{thread.tag}</span>
          {thread.title}
        </h1>
        <div className="container">
          <div className="user-details">
            <div className="avatar"></div>
            <div className="info">
              <span className="date">{moment(thread.createdAt).calendar()}</span>
              <span className="username">{user.username}</span>
            </div>
          </div>
          <div className="post">
            {parse(thread.content)}
          </div>
        </div>
      </div>
    );
  }


  return null
}

export default ThreadPage;
