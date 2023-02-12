import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

function GetStarted() {
  return (
    <div className="container border d-flex flex-column my-5 text-center">
      <h2 style={{ marginTop: "20px" }}>Join as a Client or as a Worker</h2>
      <div
        className="container d-flex my-3"
        style={{ minWidth: "5rem", minHeight: "5rem" }}
      >
        <div className="container border my-3 mx-2 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
          <h3>I'm a client, looking for a worker</h3>
          <div
            className="form-check"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
            />
          </div>
        </div>
        <div className="container border my-3 mx-2 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-tools"
            viewBox="0 0 16 16"
          >
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
          </svg>
          <h3>I'm a worker, looking for a work</h3>
          <div
            className="form-check"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <b>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
            </b>
          </div>
        </div>
      </div>
      <NavLink to="/client/signup">
        <button type="button" className="btn btn-dark">
          Create An Account
        </button>
      </NavLink>

      <Grid container justifyContent="center" style={{ margin: "30px 0px" }}>
        <Grid item>
          <Link href="/signin" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default GetStarted;
