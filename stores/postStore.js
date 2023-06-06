import { create } from "react-nuance";

const postStore = create((set) => ({
  posts: [
    { id: 1, body: "post 1", liked: "true" },
    { id: 2, body: "post 2", liked: "fasle" },
    { id: 3, body: "post 3", liked: "true" },
    { id: 4, body: "post 4", liked: "fasle" },
  ],

  setPost: (post) => {
    set((state) => {
      return {
        posts: [...state.posts, post],
      };
    });
  },

  setLike: (id) => {
    set((state) => {
      return {
        posts: state.posts.map((post) =>
          post.id === id ? { ...post, liked: !post.liked } : post
        ),
      };
    }, id);
  },
}));

export default postStore;
