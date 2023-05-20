import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";

function Forum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [replyContent, setReplyContent] = useState("");
  const [replyAuthor, setReplyAuthor] = useState("");
  const [showInputs, setShowInputs] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    axios.get("/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleButtonClick = () => {
    setShowInputs(true);
  };

  const addPost = () => {
    axios.post("/api/posts", newPost).then((response) => {
      setPosts([...posts, response.data]);
      setNewPost({ title: "", content: "", author: "" });
    });
  };

  const addReply = (postId) => {
    axios
      .post(`/api/posts/${postId}/replies`, {
        content: replyContent,
        author: replyAuthor,
      })
      .then((response) => {
        const updatedPosts = posts.map((post) =>
          post._id === postId ? response.data : post
        );
        setPosts(updatedPosts);
        setReplyContent("");
        setReplyAuthor("");
      });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <section className="gap-x-8 mb-8 mt-4 rounded-lg h-[auto] md:flex-row md:px-0 md:gap-x-16 bg-[#f8f8f8] w-full border border-b-slate-200">
        <div className="text-center md:w-1/2 w-full h-full mx-auto flex flex-col items-center justify-start md:py-12">
          <div className="w-full md:w-[800px] text-center p-4 md:p-2">
            <h2 className="text-[#4be3a8] md:font-extrabold font-bold text-3xl md:text-5xl pb-2 text-accent">
              Get in touch{" "}
              <span className="text-[#242424]"> to Learn More </span>
            </h2>
            <h2 className="font-light text-2xl hidden md:block md:font-normal text-[#242424]">
              A Place for Productive and Respectful Discussions and Debates.
              Discover New Ideas and Make Meaningful Connections
            </h2>
          </div>
        </div>
      </section>
      <div className="posts w-[70%]">
        {posts.map((post) => (
          <div key={post._id} className="post px-6 py-4">
            <h2>Title: {post.title}</h2>
            <p>{post.content}</p>
            <p>
              <span>Author: {post.author}</span>
              <span>Date: {new Date(post.date).toLocaleDateString()}</span>
            </p>
            <ul>
              {/* <h5>Replies</h5> */}
              {post.replies.map((reply, index) => (
                <li key={index}>
                  {reply.content} - {reply.author} (
                  {new Date(reply.date).toLocaleDateString()})
                </li>
              ))}
            </ul>
            <div className="reply-form">
              {showInputs ? (
                <>
                  <input
                    type="text"
                    placeholder="Your reply"
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="border rounded px-4 py-2 mb-4"
                  />

                  <input
                    type="text"
                    placeholder="Your name"
                    value={replyAuthor}
                    onChange={(e) => setReplyAuthor(e.target.value)}
                    className="border rounded px-4 py-2 mb-4"
                  />

                  <button
                    onClick={() => addReply(post._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Reply
                  </button>
                </>
              ) : (
                <button
                  onClick={handleButtonClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Reply
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="new-post-form">
        <h2>New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>
        <input
          type="text"
          placeholder="Your name"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        />
        <button className="subm" onClick={addPost}>
          Submit
        </button>
        <button
          className="bg-white rounded-full border border-black px-4 py-2 fixed bottom-6 right-6"
          onClick={scrollToBottom}
        >
          <img src="./down.png" alt="" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Forum;
