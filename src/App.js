import React from "react";
import Navbar from "../src/Components/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import SignUp from "./Components/signup/signup";
import SignIn from "./Components/signin/signin";
import GetStarted from "./Components/GetStarted";
import VerificationCard from "./Components/signup/VerificationCard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/getstarted" exact element={<GetStarted />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/verifyPhone" exact element={<VerificationCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
