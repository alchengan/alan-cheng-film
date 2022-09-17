import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Shorts,
  Skits,
  Extras,
  Contact
} from "./components";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/skits" element={<Skits />} />
      <Route path="/extras" element={<Extras />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    {/* <Footer /> */}
  </Router>,

  document.getElementById("root")
);