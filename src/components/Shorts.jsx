import React from "react";
import Video from "./Video";

function Shorts() {
  return (
    <div className="shorts">
      <h1 className="text-center mt-5">Short Films</h1>
      <p className="text-center">
        Selected short films I've created
      </p>
      <Video
        videoTitle={"Stupid American"}
        videoDesc={"As a child of immigrants, Ashley must decide whether to stick to what her parents want for her or forge a new path for herself"}
        embedId={"7AkJSeTZMRA"}
        videoId={"stupid-american"}
      />
      <Video
        videoTitle={"Untitled Fraud Documentary"}
        videoDesc={"Take a glimpse into the life of a con artist as he shares how he makes an honest living with this one simple trick"}
        embedId={"BMyKrLFAxdU"}
        videoId={"untitled-fraud-documentary"}
      />
      <Video
        videoTitle={"A Talk With A Tree"}
        videoDesc={"A tree in the park shares their thoughts on the passing of the world around them"}
        embedId={"0YmuJO1Nmls"}
        videoId={"a-talk-with-a-tree"}
      />
      <Video
        videoTitle={"Hannibal"}
        videoDesc={"Just Hannibal's normal daily morning ritual"}
        embedId={"QXmkLR4IsS4"}
        videoId={"hannibal"}
      />

      <div className="container">
        <p>See more on <a href="https://www.youtube.com/channel/UCG56taL-sHt63ub4gT-NVMQ">YouTube</a></p>
      </div>
    </div>
  );
}

export default Shorts;