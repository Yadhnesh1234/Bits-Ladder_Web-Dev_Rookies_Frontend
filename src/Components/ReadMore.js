import React from "react";

function ReadMore() {
  return (
    <>
      <div className="container my-5 p-5">
        <h2>I Will Make a Sofa at Minimal Market Cost</h2>
        {/* <h5>Harish Rajput</h5>
      <p>Carpenter</p> */}
        <div className="d-flex">
          <h6>Bid Amount : </h6>
          <p className="mx-3" style={{ fontSize: "1.1rem", fontWeight: "500" }}>
            5000 - 7000 Rs.
          </p>
        </div>
        <hr />
        <p style={{ maxWidth: "50rem" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          mollitia necessitatibus itaque doloribus dolorum aut dolore! Dolores
          tenetur explicabo deserunt quo nesciunt in harum, illum cupiditate
          tempora at perspiciatis quaerat vitae corrupti incidunt consequatur
          ea, ipsa, ullam magnam sapiente. Laudantium.
        </p>
        <i>Bid 5 hours ago</i>
        <br />
        <br />
        <br />
        <span>⭐⭐⭐⭐⭐</span>
        <h6>Harish Rajput, Carpenter</h6>

        <div className="my-5">
          <button type="button" class="btn btn-success">
            ✔ Accept
          </button>
          <button type="button" class="btn btn-danger mx-3">
            ✖ Reject
          </button>
        </div>
      </div>
    </>
  );
}

export default ReadMore;
