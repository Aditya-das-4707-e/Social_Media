import { createContext } from "react";

const postList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer();

  const addPost = (post) => {};
  const deletePost = (postId) => {};

  return (
    <postList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </postList.Provider>
  );
};

export default PostListProvider;
