import React from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from "moment";
import './css/user.css';


const User = ({users, topics}) => {
  const {userID} = useParams();
  const user = users.find(user => user.id === userID);
  console.log(user);
  console.log(topics);

  const findThreads = () => {
    const threads = [];
    topics.forEach(topic => {
      topic.threads.forEach(thread => {
        if (thread.createdBy === userID) {
          thread.topic = topic.id;
          threads.push(thread);
        }
      })
    })
    threads.sort((a,b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf())
    
    return threads.map((thread, index) => {
      console.log(thread);
      return (
        <div className="line">
          <span className="index">{`${index + 1}. `}</span>
          <Link to={`/topic/${thread.topic}/thread/${thread.id}`}>
            {thread.title}
          </Link>
        </div>
      );
    })
  }

  if (user) {
    return (
      <div className="user-page container">
        <div className="center">
          <img
            src={user.avatar.replace("=s96-c", "")}
            alt=""
            className="avatar"
          />
          <h2>{user.username}</h2>
        </div>
        {/* <div className="div">{moment(user.createdAt).calendar()}</div> */}
        <span>
          - Registered at {moment(user.createdAt).format("MMMM Do YYYY")} -
        </span>
        <div className="user-threads">
          <h3>Threads Created</h3>
          {findThreads()}
        </div>
      </div>
    );
  } return null;
}

export default User
