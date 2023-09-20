// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/css/style.css';
// import './assets/css/dark.css';

// Routes
import Home from "./routes/Home";
import Dash from "./routes/Dash";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dash" element={<Dash />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
