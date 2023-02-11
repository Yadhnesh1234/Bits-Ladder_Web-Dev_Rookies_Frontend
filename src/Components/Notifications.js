import React from "react";

function Notifications() {
  return (
    <div className="container my-5">
      <h1>Notifications 🔔</h1>
      <hr />

      <div className="container my-3">
        <i>15 minutes ago</i>
        <div
          class="card my-2"
          style={{ backgroundColor: "#2baca6", color: "white " }}
        >
          <div class="card-body">
            <span> Harish Rajput Responded to your post. </span>
            <a
              className="mx-3"
              href="/post/response/read-more"
              style={{ color: "black" }}
            >
              Checkout Bid
            </a>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <i>1 hour ago</i>
        <div
          class="card my-2"
          style={{ backgroundColor: "#2baca6", color: "white " }}
        >
          <div class="card-body">
            <span> Harish Rajput Responded to your post. </span>
            <a
              className="mx-3"
              href="/post/response/read-more"
              style={{ color: "black" }}
            >
              Checkout Bid
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
