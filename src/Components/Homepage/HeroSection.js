import React from "react";
import "../../Styles/HeroSection.css";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div id="heroSection" className="container d-flex">
      <div
        id="hero-text-container"
        className="container"
        style={{ marginRight: "4rem" }}
      >
        <h1>Find the perfect freelance services for your business</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem, unde repudiandae rerum enim doloribus id ullam? Quod,
          libero corporis.
        </p>
        <NavLink to="/getstarted">
          <button type="button" className="btn btn-dark">
            Get Started
          </button>
        </NavLink>
      </div>
      <img
        src="./Images/heroSectionImage.jpg"
        className="img-fluid"
        alt="..."
        width={480}
        height={480}
      ></img>
    </div>
  );
}

export default HeroSection;
