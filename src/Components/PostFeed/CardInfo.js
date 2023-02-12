import * as React from 'react';
import Dialogue from './Dialogue'
export default function CardInfo() {
  return (
    <div
    className="card my-5"
    style={{ maxWidth: "90rem" }}
  >
    <div className="card-body">
      <h2 className="card-title">Tap Repairing</h2>
      <h6 className="card-subtitle mb-2 text-muted">Long way highway near the newyork chai wala, </h6>
      <p className="card-text">
      <details>
       <summary>Description</summary>
       <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
        </details>
      </p>
      <Dialogue/>
      <p
        href="/"
        className="card-link"
        style={{ position: "absolute", right: "2rem", top: "1rem" }}
      >
        <h3>100$</h3>
      </p>
    </div>
  </div>
  );
}