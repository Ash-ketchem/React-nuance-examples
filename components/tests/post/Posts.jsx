"use client";

import PostItem from "./PostItem";
import postStore from "../../../stores/postStore";

const Posts = () => {
  const posts = postStore((state) => state.posts);
  const setPost = postStore((state) => state.setPost);

  console.log(posts);

  const handleAddPost = () => {
    const key = Math.random().toFixed(5);
    const post = {
      id: key,
      body: `post - ${key}`,
      liked: false,
    };
    console.log(post);
    setPost(post);
  };
  return (
    <>
      <div>
        <h3>
          <u>posts Example</u>
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "1rem",
          }}
        >
          {posts.map((post) => (
            <PostItem id={post?.id} key={post?.id} />
          ))}
        </div>
        <button
          onClick={handleAddPost}
          style={{
            border: "1px solid white",
            padding: "0.25rem",
            margin: "0.25rem",
          }}
        >
          add post
        </button>
      </div>
    </>
  );
};

export default Posts;
