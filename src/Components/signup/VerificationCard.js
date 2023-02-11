import React from "react";
import { useState, useEffect } from "react";

function VerificationCard() {
  const [counter, setCounter] = useState(30);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const resendOTP = () => {
    alert("An OTP is resent to your email address!");
    setCounter(30);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        alignItems: "center",
      }}
    >
      <div className="card text-center" style={{ width: "24rem" }}>
        <div className="card-body">
          <h2 className="card-title p-2">Verify Phone Number</h2>
          <input
            type="number"
            className="form-control my-5"
            placeholder="Enter OTP"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <a href="#" className="btn btn-primary">
            Verify OTP
          </a>
          <p
            id="metaMsg"
            className="my-3"
            style={counter < 1 ? { display: "none" } : { display: "block" }}
          >
            Get another link in {counter} seconds
          </p>

          <p
            className="mt-4 mx-auto"
            style={
              counter < 1
                ? {
                    display: "block",
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue",
                  }
                : { display: "none" }
            }
            onClick={resendOTP}
          >
            Resend OTP
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerificationCard;
