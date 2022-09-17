import React from "react";
import Video from "./Video";

function Skits() {
  return (
    <div className="skits">
      <h1 className="text-center mt-5">Comedy Skits</h1>
      <p className="text-center">
        Selected comedy skits I've created
      </p>
      <Video 
        videoTitle={"Lil Tato \"I Love My Dad\" Official Lyrics & Meaning | Verified"}
        videoDesc={"A parody of popular video series from Genius Lyrics \"Verified\" where a very normal rapper with very normal feelings towards his father explains the lyrics for his song \"I Love My Dad\""}
        embedId={"DEZPD2y-F88"}
        videoId={"i-love-my-dad"}
      />
      <Video 
        videoTitle={"Auntman"}
        videoDesc={"Antman meets his match when the newest coolest superhero kinda steals his thunder a little bit"}
        embedId={"t6S7V6nNlY8"}
        videoId={"auntman"}
      />
      <Video
        videoTitle={"Tinder Bachelorette"}
        videoDesc={"The Tinder experience distilled into a dating show format"}
        embedId={"SZc9IGJxCuk"}
        videoId={"tinder-bachelorette"}
      />
      <Video
        videoTitle={"Just Head and Arms Guy"}
        videoDesc={"Join Just Head and Arms Guy in a relaxing spiritual experience as he guides you through a meditative journey"}
        embedId={"ezbeNWCNJRU"}
        videoId={"just-head-and-arms-guy"}
      />
      <div className="container">
        <p>See more on <a href="https://www.youtube.com/channel/UCG56taL-sHt63ub4gT-NVMQ">YouTube</a></p>
      </div>
    </div>
  )
}

export default Skits;