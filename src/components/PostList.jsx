import React, { useContext } from "react";
import Post from "./Post";
import { postListContext as postListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(postListData);
  console.log(postList);
  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;