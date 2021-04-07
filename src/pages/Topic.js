import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import ThreadPreview from '../components/ThreadPreview/ThreadPreview';
import './css/topic.css';

const moderators = (topic, users ) => {
  return topic.moderators.map((mod, index) => {
    const user = users.find((user) => user.id === mod);
    return (
      <Link key={`mod${index}`} to={`/users/${user.id}`}>
        {user.username}
      </Link>
    );
  });
};

const Topic = ({ topics, users, loggedIn }) => {
  const { topicID } = useParams();
  const { pathname } = useLocation();
  const topic = topics.find((topic) => topic.id === topicID);

  return topic && users ? (
    <div className="topicpage">
      <div className="topic-header">
        <img src={`../assets/topics/${topicID}.jpg`} alt="topic avatar" />
        <div className="info">
          <h1>{topic.title}</h1>
          <p>{topic.description}</p>
          {loggedIn && (
            <div className="controls">
              <div className="btn">
                <Link to={pathname + "/newthread"}>
                  <span className="material-icons">add_circle_outline</span>
                  New Thread
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="moderators">
          <h3>Moderators</h3>
          {moderators(topic, users)}
        </div>
      </div>
      <div className="container">
        {topic.threads.map((thread, index) => (
          <ThreadPreview key={`thread-${index}`} thread={thread} users={users} topicID={topicID} />
        ))}
        {/* <TopicThreads users={users} topic={topic} /> */}
      </div>
    </div>
  ) : null;
};

export default Topic;
