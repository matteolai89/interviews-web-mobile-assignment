import "./App.css";
import CreatePost from "./components/model/CreatePost";
import Header from "./components/Header";
import PostLayout from "./components/model/Posts/PostLayout";
import { useState } from "react";
import ModalPost from "./components/model/Posts/ModalPost";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addPostHandler = (post) => {
    setPosts((prevPosts) => {
      return [...prevPosts, { post }];
    });
  };
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="app">
        <Header />
        <CreatePost onAddPost={addPostHandler} />
        <PostLayout postsList={posts} onShowModal={showModalHandler} />
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showModal}
          onHide={hideModalHandler}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hideModalHandler}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default App;
