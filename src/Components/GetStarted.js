import React from "react";
import { Link } from "react-router-dom";
import SignUpClient from "./signup/signupclient";

function GetStarted() {
  return (
    <div className="container border d-flex flex-column my-5 text-center">
      <h2>Join as a Client or as a Worker</h2>
      <div
        className="container d-flex my-3"
        style={{ minWidth: "5rem", minHeight: "5rem" }}
      >
        <Link to={'/signupclient'} className="container border my-3 mx-2 p-3 text-decoration-none ">
          <h3 className="fs-5 ">
            I am a client, looking for a worker
          </h3>
          
        </Link>
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
