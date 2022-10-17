import React from "react";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import classes from "./PostLayout.module.css";

const PostLayout = () => {
  return (
    <>
      <div className={classes["post-layout"]}>
        <PostHeader />
        <PostBody />
        <PostFooter />
      </div>
    </>
  );
};

export default PostLayout;
