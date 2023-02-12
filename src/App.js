import React from "react";
import Navbar from "../src/Components/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import SignUp from "./Components/signup/signup";
import SignUpClient from "./Components/signup/signupclient";
import SignIn from "./Components/signin/signin";
import GetStarted from "./Components/GetStarted";
import ClientPostingPage from "./Components/ClientPostingPage";
import VerificationCard from "./Components/signup/VerificationCard";
import PostResponsesPage from "./Components/PostResponsesPage";
import ReadMore from "./Components/ReadMore";
import DashBoard from "./Components/clientdashboard/Dashboard";
import Notifications from "./Components/Notifications";
import WorkerProfilePage from "./Components/WorkerProfilePage/WorkerProfilePage";
import Subscription from "./Components/Subscription/subscription";
import PostFeed from "./Components/PostFeed/PostFeed";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {window.location.pathname === "/admin" ? null : <Navbar />}
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/getstarted" exact element={<GetStarted />} />
          <Route path="/client/signin" exact element={<SignIn />} />
          <Route path="/worker/signin" exact element={<SignIn />} />
          <Route path="/worker/signup" exact element={<SignUp />} />
          <Route path="/client/signup" exact element={<SignUpClient />} />
          <Route path="/verifyPhone" exact element={<VerificationCard />} />
          <Route path="/profile/worker" exact element={<WorkerProfilePage />} />
          <Route path="/post-work" exact element={<ClientPostingPage />} />
          <Route path="/post/responses" exact element={<PostResponsesPage />} />
          <Route path="/post/response/read-more" exact element={<ReadMore />} />
          <Route path="/notifications" exact element={<Notifications />} />
          <Route path="/client/dashboard" exact element={<DashBoard />} />
          <Route path="/worker/subscription" exact element={<Subscription />} />
          <Route path="/worker/postfeed" exact element={<PostFeed />} />
          <Route
            path="/worker/dashboard"
            exact
            element={<WorkerProfilePage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
