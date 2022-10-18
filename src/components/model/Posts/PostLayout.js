import React, { useEffect, useState } from "react";

import classes from "./PostLayout.module.css";
import { FaUserCircle } from "react-icons/fa";
import { DataSnapshot, onValue, ref } from "firebase/database";
import { db } from "../../../util/firebase";
import ModalPost from "./ModalPost";

import { uid } from "uid";

const PostLayout = (props) => {
  const uniqueId = uid();
  const [posts, setPosts] = useState([]);

  const [tempUId, setTempUId] = useState("");

  useEffect(() => {
    const postRef = ref(db);
    onValue(postRef, (snapshot) => {
      const posts = snapshot.val();
      //   console.log(posts);
      const arrayPosts = [];
      const postsList = Object.values(posts);
      arrayPosts.push(...postsList);
      console.log(postsList);
      setPosts(arrayPosts);
    });
  }, []);

  //   const updateHandler = (post) => {
  //     setIsEdit(true);
  //     setTempUId(post.uniqueId);
  //   };

  return (
    <>
      {posts.map((singlePost) => (
        <ul className={classes["list-layout"]}>
          <div className={classes["post-layout"]}>
            <div className={classes["header-container"]}>
              <div className={classes.user}>
                <FaUserCircle />
                <h2>nome utente</h2>
              </div>
              <h2 className={classes.date}>data</h2>
            </div>
            <div className={classes["body-container"]}>
              <p>{singlePost.post}</p>
            </div>
            <div className={classes["footer-container"]}>
              <button>add comment</button>
              <button onClick={props.onShowModal}>edit</button>
              <button>delete</button>
            </div>
          </div>
        </ul>
      ))}
    </>
  );
};

export default PostLayout;
