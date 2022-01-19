import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage.js";

function LoggedOutLanding({ setCurrentUser }) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<LoginPage setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage setCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </div>
  );
}

export default LoggedOutLanding;