import React from "react";

const CreatePost = () => {
  return (
    <div className="container my-4">
      <form className="create-post">

        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User ID
          </label>
          <input
            type="text"
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
            className="form-control"
            id="tags"
            placeholder="Enter your tags using spaces"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
