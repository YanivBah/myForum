import React, { useRef, useState} from 'react';
import { useParams, Redirect } from "react-router-dom";
import RichTextEditor from "../components/RichTextEditor/RichTextEditor";
import Comment from "../components/Comment/Comment";
import { addComment } from "../utilites/crudFuncs";
import './css/thread.css';

const Thread = ({ topics, users, update, loggedIn }) => {
  const { topicID, threadID } = useParams();
  const [redirect, setRedirect] = useState(null);
  const commentEditorRef = useRef(null);

  const handleComment = async () => {
    await addComment(
      topicID,
      threadID,
      commentEditorRef.current.editor.getContent({ format: "html" }),
      loggedIn
    );
    commentEditorRef.current.editor.resetContent();
    await update();
  };

  if (topics.length) {
    const topic = topics.find((topic) => topic.id === topicID);
    const thread = topic.threads.find((thread) => thread.id === threadID);
    return thread ? (
      <div className="thread">
        <h1 className="title">
          {thread.tag === "NoTag" ? null : (
            <span className="tag">{thread.tag}</span>
          )}
          {thread.title}
        </h1>
        <div className="container">
          <Comment
            post={thread}
            users={users}
            index="0"
            topicID={topicID}
            threadID={threadID}
            setRedirect={setRedirect}
            type="thread"
            update={update}
            loggedIn={loggedIn}
          />
          {thread.posts.map((post, index) => (
            <Comment
              key={`comment-${index}`}
              post={post}
              users={users}
              index={index}
              topicID={topicID}
              threadID={threadID}
              setRedirect={setRedirect}
              type="comment"
              update={update}
              loggedIn={loggedIn}
            />
          ))}
        </div>
        {loggedIn !== null && (
          <div className="comment-editor">
            <h3>Add your comment</h3>
            <RichTextEditor createRef={commentEditorRef} height="200px" />
            <button onClick={handleComment}>Post</button>
          </div>
        )}
      </div>
    ) : (
      <Redirect to={redirect} />
    );
  }
  return null;
};

export default Thread;
