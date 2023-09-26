import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Auth/Login";
import SignUp from "./components/pages/Auth/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exaxct path="/" element={<Home />} />
          <Route exaxct path="/login" element={<Login />} />
          <Route exaxct path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
