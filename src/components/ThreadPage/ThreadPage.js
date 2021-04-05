import React, { useState, useEffect, useRef } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import moment from "moment";
import parse from "html-react-parser";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import "./threadpage.css";

const ThreadPage = ({ topics, users, deleteFunc }) => {
  const { topicID, threadID } = useParams();
  const [redirect, setRedirect] = useState(null);
  const [ isEdit, setIsEdit] = useState(false);
  const editorRef = useRef(null);

  const comments = () => {};

  const handleDelete = () => {
    deleteFunc(topicID,threadID);
    setRedirect(`/topic/${topicID}`);
  };

  const handleEdit = () => {
    console.log(editorRef.current.currentContent);
    // e[2].currentContent;
  }

  const controls = () => {
    if (!isEdit) {
      return (
        <div className="controls">
          <button onClick={handleDelete}>
            <span className="material-icons">delete_forever</span>
            Delete
          </button>
          <button onClick={() => setIsEdit(true)}>
            <span className="material-icons">edit</span>
            Edit
          </button>
        </div>
      );
    } return (
      <div className="controls">
        <button onClick={handleEdit}>
          <span className="material-icons">save</span>
          Save
        </button>
        <button onClick={() => setIsEdit(false)}>
          <span className="material-icons">close</span>
          Cancel
        </button>
      </div>
    );
  };

  if (topics.length) {
    const topic = topics.find((topic) => topic.id === topicID);
    const thread = topic.threads.find((thread) => thread.id === threadID);
    if (thread) {
      const user = users.find((user) => user.id === thread.createdBy);
      moment.updateLocale("en", {
        calendar: {
          lastDay: "[Yesterday at] H:m",
          sameDay: "[Today at] H:mm",
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
                <span className="date">
                  {moment(thread.createdAt).calendar()}
                </span>
                <span className="username">{user.username}</span>
              </div>
            </div>
            <div className="post">
              {!isEdit ? parse(thread.content)
              : <RichTextEditor createRef={editorRef} value={thread.content}/>}
            </div>
            {controls()}
          </div>
        </div>
      );
    }
    return <Redirect to={redirect}/>
  }

  return null;
};

export default ThreadPage;
