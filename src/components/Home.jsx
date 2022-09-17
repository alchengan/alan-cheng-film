import React from "react";
import Carousel from "./Carousel";
// import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div className="home">
      <div className="container home-container">
        <Carousel className="home-content video-carousel"/>
        <div className="home-content home-intro">
          <div className="row">
            <h1 className="mt-5">hello. my name is alan</h1>
          </div>
          <div className="row home-intro-paragraph">
            <p>I am a writer, director, actor, and editor</p>
            <p style={{whiteSpace: 'nowrap'}}>I would also like to be a musician, voice actor, illustrator, animator, content creator, streamer, pro gamer, game developer, sound designer, rapper, magician, podcaster, documentarian</p>
            <p>Welcome to my site, I hope you like what you see</p>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  );
}

export default Home;