import { Grid, Select } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ClientPostingPage() {
  const [selected, setSelected] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchCat = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         "http://localhost:5000/api/v1/categories"
  //       );
  //       console.log("backed data", data.data[0].title);
  //       setCategories(data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchCat();
  // }, [setCategories]);

  async function postData(data) {
    const response = await fetch("http://localhost:5000/api/v1/client/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const handleData = () => {
    console.log("Hello");
    let Data = {
      title: document.getElementById("post-title").value,
      place: document.getElementById("post-place").value,
      location: {
        type: "Point",
        coordinates: [
          document.getElementById("post-latitude").value,
          document.getElementById("post-longitude").value,
        ],
      },
      description: document.getElementById("post-desc").value,
      minBudget: document.getElementById("post-estBud").value,
      maxBudget: document.getElementById("post-estBud").value,
      category: "63e68fa682ffddcd6081e5a1",
      owner: localStorage.getItem("userId"),
    };
    postData(Data).then((data) => {
      console.log(data);
      if (data.success) {
        alert("Post Created Successfully");
        navigate("/client/dashboard");
      } else {
        alert("Unable to create post :(");
      }
    });
  };

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
              id="post-title"
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
                id="post-place"
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
                id="post-longitude"
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
                id="post-latitude"
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
              id="post-estBud"
              aria-describedby="emailHelp"
              style={{ maxWidth: "28rem" }}
            />
          </div>

          <div className="my-3">
            <Grid style={{ zIndex: "10" }} item xs={12}>
              <label>Select Category: </label>
              <br />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                <option>Plumber</option>
                <option>Electrician</option>
                <option>Other</option>
              </select>
            </Grid>
          </div>

          <div className="my-3">
            <label for="exampleInputEmail1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="post-desc"
              rows="5"
              style={{ maxWidth: "28rem" }}
              placeholder="Elaborate your work requirements here"
            ></textarea>
          </div>
        </div>

        <button onClick={handleData} className="btn btn-dark">
          Create Post
        </button>
      </div>
    </div>
  );
}

export default ClientPostingPage;
