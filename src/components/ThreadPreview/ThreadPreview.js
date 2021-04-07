import React from 'react';
import { Link } from 'react-router-dom';
import "./threadpreview.css";


const ThreadPreview = ({ thread, users, topicID }) => {
  const creator = users.find((user) => user.id === thread.createdBy);
  return (
    <div className="thread-row" key={`thread${thread.id}`}>
      <img className="avatar" src={creator.avatar} alt=""/>
      <div className="info">
        <div className="title">
          <span className="tag">
            {thread.tag === "NoTag" ? "" : thread.tag}
          </span>
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
};

export default ThreadPreview;
