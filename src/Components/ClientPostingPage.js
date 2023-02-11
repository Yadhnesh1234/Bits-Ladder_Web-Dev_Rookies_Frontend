import React from "react";

function ClientPostingPage() {
  return (
    <div className="card container my-5">
      <h2 className="card-header">Post Work</h2>
      <div className="card-body">
        <p className="card-title">
          <i>
            Find the hidden gem of the workforce with just one post - search for
            workers by posting your requirements today!
          </i>
        </p>
        <br />
        {/* Title  */}
        <div className="mb-3">
          <div>
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ maxWidth: "42rem" }}
            />
          </div>

          <div className="d-flex my-3">
            <div style={{ marginRight: "1rem" }}>
              <label for="exampleInputEmail1" className="form-label">
                Place
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div style={{ marginRight: "1rem" }}>
              <label for="exampleInputEmail1" className="form-label">
                Longitude
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div>
              <label for="exampleInputEmail1" className="form-label">
                latitude
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          <div>
            <label for="exampleInputEmail1" className="form-label">
              Estimated Budget
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ maxWidth: "28rem" }}
            />
          </div>

          <div className="my-3">
            <label for="exampleInputEmail1" className="form-label">
              Category
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ maxWidth: "28rem" }}
            />
          </div>

          <div className="my-3">
            <label for="exampleInputEmail1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              style={{ maxWidth: "28rem" }}
              placeholder="Elaborate your work requirements here"
            ></textarea>
          </div>
        </div>

        <a href="#" className="btn btn-dark">
          Create Post
        </a>
      </div>
    </div>
  );
}

export default ClientPostingPage;
