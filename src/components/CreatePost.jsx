import React, { useContext, useRef } from "react";
import { postListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(postListContext)

  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement = useRef()
  const reactionElement = useRef()
  const tagsElement = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactions, tags)
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
  }


  return (
    <div className="container my-4">
      <form className="create-post" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User ID
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your <@user_id>"
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
            placeholder="What’s happening?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows={6}
            className="form-control"
            id="body"
            placeholder="Description...."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            ref={reactionElement}
            className="form-control"
            id="reaction"
            placeholder="How many people reacted?"
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
