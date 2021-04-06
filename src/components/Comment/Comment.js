import React, { useState, useEffect, useRef } from 'react';
import moment from "moment";
import parse from "html-react-parser";
import RichTextEditor from "../RichTextEditor/RichTextEditor";

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

const Comment = ({post, users}) => {
  const [isEdit, setIsEdit] = useState(false);
  const user = users.find((user) => user.id === post.createdBy);
  const editorRef = useRef(null);

  return (
    <div>
      <div className="user-details">
        <div className="avatar"></div>
        <div className="info">
          <span className="date">{moment(post.createdAt).calendar()}</span>
          <span className="username">{user.username}</span>
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
    </div>
  );
}

export default Comment;
