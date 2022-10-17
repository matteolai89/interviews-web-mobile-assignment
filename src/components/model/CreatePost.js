import React, { useState } from "react";
import classes from "./CreatePost.module.css";

const CreatePost = () => {
  const [post, setPost] = useState("");

  const sendPost = () => {};

  const handleChange = () => {};

  return (
    <form onSubmit={sendPost} className={classes.form}>
      <div className={classes["form-container"]}>
        <input
          type="text"
          placeholder="Write Something"
          className={classes["input-post"]}
          required
          // value={post}
          // onChange={handleChange}
        ></input>
        <button className={classes["button-post"]}>Post</button>
      </div>
    </form>
  );
};

export default CreatePost;
