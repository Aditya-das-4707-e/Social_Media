import React, { useContext } from "react";
import Post from "./Post";
import { postListContext as postListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts} = useContext(postListData);
  const handleGetPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data => {
        addInitialPosts(data.posts);
      }
      );
  };

  return (
    <div>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleGetPost} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
