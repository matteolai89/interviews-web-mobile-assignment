import React, { useState } from "react";
import classes from "./Post.module.css";

const Post = ({ body, id, onEdit, onDeletePost }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };
  const commentsHandler = () => {
    setShowComments(true);
    onShowComments(id);
  };

  const hideCommentsHandler = () => {
    setShowComments(false);
  };

  const saveEditHandler = (e) => {
    e.preventDefault();

    onEdit(id, e.target.body.value);
    setIsEdit(!isEdit);
  };

  const deleteHandler = () => {
    onDeletePost(id);
  };

  const onShowComments = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments((comments) => [...data]);
      });
    console.log(comments);
  };

  return (
    <div className={classes["post-container"]}>
      {isEdit ? (
        <div className={classes["edit-form-container"]}>
          <form onSubmit={saveEditHandler} className={classes.form}>
            <div className={classes["form-container"]}>
              <textarea
                placeholder="Post"
                name="body"
                defaultValue={body}
                className={classes["input-post"]}
              />
              <button
                onSubmit={saveEditHandler}
                className={classes["button-save"]}
              >
                Save
              </button>
              <button
                onSubmit={!editHandler}
                className={classes["button-cancel"]}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className={classes["post-layout"]}>
          <div className={classes["list-layout"]}>
            <div className={classes["body-container"]}>
              <p>{body}</p>
            </div>
            <div className={classes["footer-container"]}>
              {!showComments && (
                <button
                  className={classes["button-show-comments"]}
                  onClick={commentsHandler}
                >
                  Show Comments
                </button>
              )}
              {showComments && (
                <button
                  className={classes["button-hide-comments"]}
                  onClick={hideCommentsHandler}
                >
                  Hide Comments
                </button>
              )}
              <div className={classes.space}></div>

              <button className={classes["button-edit"]} onClick={editHandler}>
                Edit
              </button>
              <button
                className={classes["button-delete"]}
                onClick={deleteHandler}
              >
                Delete
              </button>
            </div>

            {showComments && (
              <div className={classes["comments-layout"]}>
                {comments.map((comment) => (
                  <div className={classes["comments-container"]}>
                    <p>{comment.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
