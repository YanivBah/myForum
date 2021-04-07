import React from 'react';
import { Link } from "react-router-dom";
import moment from "moment";
import "./topicpreview.css";

moment.updateLocale("en", {
  calendar: {
    lastDay: "[Yesterday at] HH:mm",
    sameDay: "[Today at] HH:mm",
    nextDay: "[Tomorrow at] HH:mm",
    lastWeek: "[last] dddd [at] HH:mm",
    nextWeek: "dddd [at] HH:mm",
    sameElse: "DD/MM/YYYY - HH:mm",
  },
});

const TopicPreview = ({topic, index, users}) => {
  const { title, description, id, threads } = topic;
  console.log(topic);
  let user;
  if (topic.threads.length > 0) {
    const {createdBy} = topic.threads[0]
    user = users.find(user => user.id === createdBy);
  }
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
              ? `${threads.reduce((acc, curr) => acc + curr.posts.length, 0) / 1000}k`
              : threads.reduce((acc, curr) => acc + curr.posts.length, 0)}
            <h4>Posts</h4>
          </div>
        </div>
        {threads.length > 0 && (
          <div className="topic-last-post">
            <h4>
              <Link to={`/topic/${id}/thread/${threads[0].id}`}>
                {threads[0].title}
              </Link>
              <span className="material-icons">navigate_next</span>
            </h4>
            <div className="row">
              <h4>Posted by</h4>
              <span>
                <Link to={`/users/${user.id}`}>{user.username}</Link>
              </span>
            </div>
            <div className="row">
              <h4>Updated at</h4>
              <span>
                {moment(threads[0].editedAt || threads.createdBy).calendar()}
              </span>
            </div>
          </div>
        )}
      </div>
    );
};

export default TopicPreview;