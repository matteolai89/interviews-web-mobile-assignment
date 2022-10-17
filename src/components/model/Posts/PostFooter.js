import React from "react";
import classes from "./PostLayout.module.css";

const PostFooter = () => {
  return (
    <>
      <div className={classes["footer-container"]}>
        <button>add comment</button>
        <button>edit</button>
        <button>delete</button>
      </div>
    </>
  );
};

export default PostFooter;
