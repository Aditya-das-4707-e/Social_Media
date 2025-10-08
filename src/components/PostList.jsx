import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";
import { postListContext as postListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LodingSpinner from "./LodingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(postListData);


  return (
    <div>
      {fetching && <LodingSpinner></LodingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;