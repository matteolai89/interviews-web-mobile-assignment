import React, { useState } from "react";
import classes from "./CreatePost.module.css";
import { db } from "../../util/firebase";
import { set, ref } from "firebase/database";
import { uid } from "uid";

const CreatePost = (props) => {
  const [post, setPost] = useState("");

  //   const sendPost = (e) => {
  //     const postsRef = db.database().ref("Posts");
  //     const postData = {
  //       post,
  //     };
  //     postsRef.push(postData);
  //   };
  const uniqueId = uid();
  const handleChange = (e) => {
    setPost(e.target.value);
  };
  const sendPost = (e) => {
    e.preventDefault();
    console.log(post);
    set(ref(db, `/${uniqueId}`), {
      post,
    });
    props.onAddPost(post);
    setPost("");
  };

  //   const handleChange = (e) => {
  //     setPost(e.target.value);
  //   };

  return (
    <form onSubmit={sendPost} className={classes.form}>
      <div className={classes["form-container"]}>
        <input
          type="text"
          placeholder="Write Something"
          className={classes["input-post"]}
          required
          value={post}
          onChange={handleChange}
        ></input>
        <button className={classes["button-post"]} type="submit">
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
