import postStore from "../../../stores/postStore";

const PostItem = ({ id }) => {
  const post = postStore(
    (state) => state.posts.find((post) => post.id === id),
    id
  );
  const setLike = postStore((state) => state.setLike);

  const handleLike = () => {
    setLike(id);
  };

  return (
    <>
      <div
        style={{
          background: "transparent",
          border: "1px solid black",
          margin: "0.5rem",
          padding: "0.5rem",
          height: "150px",
          width: "150px",
        }}
      >
        <p>{post.body}</p>
        <button
          onClick={handleLike}
          style={{
            border: "1px solid white",
            padding: "0.25rem",
            margin: "0.25rem",
          }}
        >
          {post.liked ? "unlike" : "like"}
        </button>
      </div>
    </>
  );
};

export default PostItem;
