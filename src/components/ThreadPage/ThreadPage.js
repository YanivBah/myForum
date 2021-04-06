import React, { useState, useEffect, useRef } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import moment from "moment";
import parse from "html-react-parser";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import Comment from '../Comment/Comment';
import "./threadpage.css";

const ThreadPage = ({ topics, users, deleteFunc, editFunc, commentFunc }) => {
  const { topicID, threadID } = useParams();
  const [redirect, setRedirect] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const commentEditorRef = useRef(null);
  const editorRef = useRef(null);

  const handleDelete = () => {
    deleteFunc(topicID, threadID);
    setRedirect(`/topic/${topicID}`);
  };

  const handleEdit = () => {
    editFunc(topicID, threadID, editorRef.current.editor.getContent({format: "html"}));
    setIsEdit(false);
  };

  const handleComment = () => {
    commentFunc(
      topicID,
      threadID,
      commentEditorRef.current.editor.getContent({ format: "html" }));
    commentEditorRef.current.editor.resetContent();
  };

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
    }
    return (
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
    return thread ?
    (<div className="thread">
        <h1 className="title">
          {thread.tag === "NoTag" ? null : (
            <span className="tag">{thread.tag}</span>
          )}
          {thread.title}
        </h1>
        <div className="container">
          <Comment post={thread} users={users} />
          {thread.posts.map((post, index) => (
            <Comment post={post} users={users} number={index} />
          ))}
          {/* {controls()} */}
          {/* {comments(thread)} */}
        </div>
        <div className="comment-editor">
          <h3>Add your comment</h3>
          <RichTextEditor createRef={commentEditorRef} height="200px" />
          <button onClick={handleComment}>Post</button>
        </div>
      </div>)
      :
      (<Redirect to={redirect} />);
  }

  return null;
};

export default ThreadPage;
