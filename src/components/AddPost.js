import React from "react";
import classes from "./AddPost.module.css";

const AddPost = ({ onAddPost }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAddPost(e.target.body.value);
    e.target.body.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes["form-container"]}>
        <textarea
          placeholder="Write a post"
          name="body"
          className={classes["input-post"]}
          required
        ></textarea>
        <button className={classes["button-post"]} type="submit">
          Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
