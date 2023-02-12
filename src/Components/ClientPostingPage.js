import { Grid, Select } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";


function ClientPostingPage() {
  const [selected, setSelected] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCat = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/categories"
        );
        console.log("backed data", data.data[0].title);
        setCategories(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCat();
  }, [setCategories]);

  const handleData = ()=>{

  }

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
            <Grid style={{ zIndex: "10" }} item xs={12}>
              <label>Select Category: </label><br/>
                <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate, index) => (
                  <option key={cate.title} value={cate.title}>
                    {cate.title}
                  </option>
                ))}
              </select>
            </Grid>
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

        <button onClick={handleData} className="btn btn-dark">
          Create Post
        </button>
      </div>
    </div>
  );
}

export default ClientPostingPage;
