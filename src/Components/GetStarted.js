import React from "react";

function GetStarted() {
  return (
    <div className="container border d-flex flex-column my-5 text-center">
      <h2>Join as a Client or as a Worker</h2>
      <div
        className="container d-flex my-3"
        style={{ minWidth: "5rem", minHeight: "5rem" }}
      >
        <h3 className="container border my-3 mx-2 p-3">
          I am a client, looking for a worker
        </h3>
        <h3
          className="container border my-3 mx-2 p-3"
          style={{ minWidth: "5rem", minHeight: "5rem" }}
        >
          I am a worker, looking for a work
        </h3>
      </div>
      <button type="button" class="btn btn-dark">
        Join
      </button>
    </div>
  );
}

export default GetStarted;
