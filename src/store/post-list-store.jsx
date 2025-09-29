import { createContext } from "react";
import { useReducer } from "react";

export const postListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (post) => {};
  const deletePost = (postId) => {};

  return (
    <postListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </postListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Goa",
    body: "Hey! I am going to Goa this weekend. Anyone wants to join?",
    reaction: 2,
    userId: "user_9",
    tags: ["#travel", "#fun", "#beach"],
  },
  {
    id: "2",
    title: "Going to Kolkata",
    body: "Hey! I am going to Kolkata this weekend. Anyone wants to join?",
    reaction: 4,
    userId: "user_10",
    tags: ["#travel", "#fun", "#culture"],
  },
];

export default PostListProvider;
