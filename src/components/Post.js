import React, { useState } from "react";
import classes from "./PostLayout.module.css";

const Post = ({ body, id, onEdit, onDeletePost }) => {
  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };
  //   const handleEdit = () => {
  //     setIsEdit(!isEdit);
  //   };

  const saveEditHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.body.value);
    onEdit(id, e.target.body.value);
    setIsEdit(!isEdit);
  };

  //   const handleOnEditSubmit = (evt) => {
  //     evt.preventDefault();
  //     console.log(evt.target.body.value);
  //     onEdit(id, evt.target.body.value);
  //     setIsEdit(!isEdit);
  //   };

  const deleteHandler = () => {
    onDeletePost(id);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={saveEditHandler} className={classes.form}>
          <div className={classes["form-container"]}>
            <input
              placeholder="Post"
              name="body"
              defaultValue={body}
              className={classes["input-post"]}
            />
            <button
              onSubmit={saveEditHandler}
              className={classes["button-post"]}
            >
              Save
            </button>
            <button onSubmit={!editHandler} className={classes["button-post"]}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className={classes["post-layout"]}>
          <div className={classes["body-container"]}>
            <p>{body}</p>
          </div>
          <div className={classes["footer-container"]}>
            <button className={classes["button-post"]} onClick={editHandler}>
              edit
            </button>
            <button className={classes["button-post"]} onClick={deleteHandler}>
              delete
            </button>
          </div>
        </div>
      )}
    </div>
    // <div>
    //   {isEdit ? (
    //     <form onSubmit={handleOnEditSubmit}>
    //       <input placeholder="Name" name="body" defaultValue={body} />
    //       {/* <input placeholder="Email" name="email" defaultValue={email} /> */}
    //       <button onSubmit={handleOnEditSubmit}>Save</button>
    //     </form>
    //   ) : (
    //     <div className="user">
    //       <span className="user-name">{body}</span>
    //       {/* <span className="user-email">{email}</span> */}
    //       <div>
    //         <button onClick={handleEdit}>Edit</button>
    //         <button onClick={deleteHandler}>Delete</button>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default Post;
