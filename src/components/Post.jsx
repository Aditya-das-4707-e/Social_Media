import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { postListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const {deletePost} = useContext(postListContext)



  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {" "}
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer"
          onClick={() => deletePost(post.id)}>
            <MdDelete></MdDelete>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary HashTag">
            {" "}
            {tag}{" "}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
