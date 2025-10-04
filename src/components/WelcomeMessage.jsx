import React from "react";

const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <div>
      <center className="welcome-message">
        <h1>There are no post</h1>
        <button
          type="button"
          onClick={onGetPostClick}
          className="btn btn-outline-primary"
        >
          Get Post Form Server
        </button>
      </center>
    </div>
  );
};

export default WelcomeMessage;
