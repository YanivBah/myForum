import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";
import parse from "html-react-parser";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import CommentControl from '../CommentControl/CommentControl';
import { deleteThread, editThread, deleteComment, editComment} from "../../utilites/crudFuncs";

moment.updateLocale("en", {
  calendar: {
     lastDay: "[Yesterday at] H:mm",
     sameDay: "[Today at] H:mm",
     nextDay: "[Tomorrow at] H:mm",
     lastWeek: "[last] dddd [at] H:mm",
     nextWeek: "dddd [at] H:mm",
      sameElse: "DD/MM/YYYY - H:mm",
  },
});


const Comment = ({ topicID, threadID, post, users, setRedirect ,index ,type ,update }) => {
  const [isEdit, setIsEdit] = useState(false);
  const user = users.find((user) => user.id === post.createdBy);
  const editorRef = useRef(null);

  const handleDelete = async () => {
    switch (type) {
      case 'thread':
        await deleteThread(topicID, threadID);
        setRedirect(`/topic/${topicID}`);
        break;
      case 'comment':
        await deleteComment(index,topicID, threadID);
        break;

      default:
        break;
    }
    await update();
  };

  const handleEdit = async() => {

    switch (type) {
      case "thread":
        await editThread(
          topicID,
          threadID,
          editorRef.current.editor.getContent({ format: "html" })
        );
        break;
      case "comment":
        await editComment(
          index,
          topicID,
          threadID,
          editorRef.current.editor.getContent({ format: "html" })
        );
        break;

      default:
        break;
    }

    await update();
    setIsEdit(false);
  };

  return (
    <div>
      <div className="user-details">
        <div className="avatar"></div>
        <div className="info">
          <span className="date">{moment(post.createdAt).calendar()}</span>
          <Link to={`/users/${user.id}`}>
            <span className="username">{user.username}</span>
          </Link>
        </div>
      </div>
      <div className="post">
        {!isEdit ? (
          parse(post.content)
        ) : (
          <RichTextEditor
            createRef={editorRef}
            value={post.content}
            height="500px"
          />
        )}
      </div>
      <CommentControl
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Comment;
