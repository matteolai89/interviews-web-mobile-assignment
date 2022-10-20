import "./App.css";

import Post from "./components/Post";

import { useEffect, useState } from "react";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchDataPost();
  }, []);

  const fetchDataPost = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  const onAddPost = async (body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts((posts) => [...posts, data]);
      });
  };

  const onEdit = async (id, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: "PUT",
      body: JSON.stringify({
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = posts.map((post) => {
          console.log(post);
          if (post.id === id) {
            post.body = body;
          }
          return post;
        });
        setPosts((posts) => updatedPosts);
        console.log(data);
        console.log(body);
      });
  };

  const onDeletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
    });
  };

  console.log(posts);
  return (
    <>
      <div className="app">
        <h1>Xtream Posts Project</h1>
        <AddPost onAddPost={onAddPost} />
        <div>
          {posts.map((post) => (
            <Post
              id={post.id}
              key={post.id}
              body={post.body}
              onDeletePost={onDeletePost}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
