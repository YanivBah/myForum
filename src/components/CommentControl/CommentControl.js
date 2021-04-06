import React from 'react'

const CommentControl = ({ isEdit, setIsEdit, handleDelete, handleEdit,loggedIn,user }) => {
  if (user.id === loggedIn.id) {
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
  } return null;
  }

export default CommentControl;