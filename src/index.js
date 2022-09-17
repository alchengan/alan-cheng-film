import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  <Router>
    <Navigation />
    <Routes>
      <Route exact path="/alan-cheng-film/" element={<Home />} />
      <Route path="/alan-cheng-film/shorts" element={<Shorts />} />
      <Route path="/alan-cheng-film/skits" element={<Skits />} />
      <Route path="/alan-cheng-film/extras" element={<Extras />} />
      <Route path="/alan-cheng-film/contact" element={<Contact />} />
    </Routes>
    {/* <Footer /> */}
  </Router>,

  document.getElementById("root")
);