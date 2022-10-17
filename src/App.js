import logo from "./logo.svg";
import "./App.css";
import CreatePost from "./components/model/CreatePost";
import Header from "./components/Header";
import PostLayout from "./components/model/Posts/PostLayout";

function App() {
  return (
    <div className="app">
      <Header />
      <CreatePost />
      <PostLayout />
    </div>
  );
}

export default App;
