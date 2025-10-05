import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";
import { postListContext as postListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LodingSpinner from "./LodingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(postListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

      return () => {
        console.log("cleaning up...");;
      }
  }, []);

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
