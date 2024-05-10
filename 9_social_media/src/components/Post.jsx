import React from "react";
import { MdDelete } from "react-icons/md";
const Post = ({ post }) => {
  
  return (
    <div className="card post-card" style={{ width: "30rem", height: "15rem" }}>
      <div className="card-body d-flex flex-column justify-content-around">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete className="fw-bold fs-3 " />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="d-flex gap-2">
          {post.tags.map((tag, index) => (
            <span className="badge text-bg-primary" key={index}>
              #{tag}
            </span>
          ))}
        </div>
        <div className="alert alert-info reactions" role="alert">
          This post reacted by {post.reactions}
        </div>
      </div>
    </div>
  );
};

export default Post;
