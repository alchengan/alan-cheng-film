import React from "react";
import Video from "./Video";

function Extras() {
  return (
    <div className="shorts">
      <h1 className="text-center mt-5">Extras</h1>
      <p className="text-center">
        Some other things I've done
      </p>
      <Video
        videoTitle={"Ruinin' Da Youth"}
        videoDesc={"In a sleepy seaside town, Brant and Tommy scheme to pilfer some cigarettes from Mr. Sugimori's convenience store. A storyboard animatic"}
        embedId={"x-vqnljzC54"}
        videoId={"ruinin-da-youth"}
      />
      <div className="container">
        <p>See more on <a href="https://www.youtube.com/channel/UCG56taL-sHt63ub4gT-NVMQ">YouTube</a></p>
      </div>
    </div>
  );
}

export default Extras;