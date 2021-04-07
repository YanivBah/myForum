import React from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";
import './css/users.css';

const Users = ({users}) => {
  return (
    <div className="users container">
      <span className="header">Index</span>
      <span className="header">Avatar</span>
      <span className="header">Username</span>
      <span className="header">Registered At</span>
      {users.map((user, index) => {
        return (
          <React.Fragment key={`user-${index}`}>
            <span className="index">{index + 1}.</span>
            <img
              src={user.avatar}
              alt={user.username + " avatar"}
              className="avatar"
            />
            <Link to={`/users/${user.id}`}>
              <span>{user.username}</span>
            </Link>
            <span>{moment(user.createdAt).format("MMMM Do YYYY")}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Users
