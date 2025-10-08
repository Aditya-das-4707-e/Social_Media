import React, { useContext, useRef } from "react";
import { postListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(postListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ").filter(tag => tag.trim() !== "");

    // Clear form fields
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    // Create post object locally since API might fail
    const newPost = {
      id: Date.now(), // Generate unique ID
      title: postTitle,
      body: postBody,
      reactions: parseInt(reactions) || 0,
      userId: parseInt(userId) || 1,
      tags: tags,
    };

    // Try API call, but add post locally regardless
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: parseInt(userId) || 1,
        tags: tags,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(apiPost => {
        console.log("API Response:", apiPost);
        // Transform API response to match our structure
        const transformedPost = {
          ...apiPost,
          reactions: parseInt(reactions) || 0,
          tags: apiPost.tags || tags
        };
        addPost(transformedPost);
      })
      .catch((error) => {
        console.log("API failed, using local post:", error);
        // Use locally created post if API fails
        addPost(newPost);
      });
  };

  return (
    <div className="container my-4">
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User ID
          </label>
          <input
            type="number"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your User ID"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="What's happening?"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            rows={6}
            className="form-control"
            id="body"
            placeholder="Description...."
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of Reactions
          </label>
          <input
            type="number"
            ref={reactionElement}
            className="form-control"
            id="reaction"
            placeholder="How many people reacted?"
            defaultValue="0"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Enter your tags using spaces"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;