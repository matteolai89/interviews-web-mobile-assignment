import React from "react";
import classes from "./PostLayout.module.css";
import { FaUserCircle } from "react-icons/fa";

const PostHeader = () => {
  return (
    <>
      <div className={classes["header-container"]}>
        <div className={classes.user}>
          <FaUserCircle />
          <h2>nome utente</h2>
        </div>
        <h2 className={classes.date}>data</h2>
      </div>
    </>
  );
};

export default PostHeader;
