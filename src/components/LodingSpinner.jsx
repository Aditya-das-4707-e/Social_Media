import React from "react";

const LodingSpinner = () => {
  return (
    <div className="d-flex gap-3 justify-center m-60">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    </div>
  );
};

export default LodingSpinner;
