import { createContext, useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

export const postListContext = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  console.log(action);
  console.log(currPostList);
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    // FIX: Use action.payload.posts directly (not action.payload.posts.posts)
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        const transformedPosts = data.posts.map((post) => ({
          ...post,
          reactions:
            (post.reactions?.likes || 0) + (post.reactions?.dislikes || 0),
          tags: post.tags || [],
        }));

        addInitialPosts(transformedPosts);
        setFetching(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
          setFetching(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts, // This should be the array of posts
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <postListContext.Provider
      value={{ postList, fetching, addPost, deletePost }}
    >
      {children}
    </postListContext.Provider>
  );
};

export default PostListProvider;
