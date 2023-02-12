import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardInfo from "./CardInfo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      console.log(JSON.parse(data.data));
      setData(JSON.parse(data.data));
    });
  }, []);

  async function getData() {
    let userId = localStorage.getItem("userId");
    const response = await fetch(
      `http://localhost:5000/api/v1/client/${userId}/posts`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  }
  return (
    <>
      <Container maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            bgcolor: "white",
            border: "2px solid gray",
            height: "26vh",
            width: "192%",
            marginLeft: "-270px",
            marginTop: "74px",
            borderRadius: "12px",
          }}
        >
          <Grid
            container
            spacing={2}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Grid item xs={4}>
              <h2>Yadhnesh Gangurde</h2>
              <p>gangurdeyadhnesh28@gmail.com</p>
              <p>7391886702</p>
            </Grid>
            <Grid item xs={4}>
              <h2>Total Posts :</h2>
              <p style={{ fontSize: "40px" }}>100</p>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            bgcolor: "white",
            overflow: "auto",
            boxShadow: " 1px 1px 6px black",
            height: "100vh",
            width: "192%",
            marginLeft: "-270px",
            marginTop: "15px",
            borderRadius: "12px",
          }}
        >
          <div style={{ padding: "50px" }}>
            <h3>Posts</h3>
            {data.map((value, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="card my-5"
                    style={{ maxWidth: "90rem" }}
                  >
                    <div className="card-body">
                      <h2 className="card-title">{value.title}</h2>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {value.category.title}
                      </h6>
                      <p className="card-text">
                        <details>
                          <summary>Description</summary>
                          <p>{value.description}</p>
                        </details>
                      </p>
                      <Link
                        to={"/post/responses"}
                        type="button"
                        className="btn btn-success"
                      >
                        Requests
                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{ marginLeft: "46rem" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </button>
                      <p
                        href="/"
                        className="card-link"
                        style={{
                          position: "absolute",
                          right: "2rem",
                          top: "1rem",
                        }}
                      >
                        <h3>{value.maxBudget} Rs</h3>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Box>
      </Container>
    </>
  );
}
