import React from "react"

const Video = ( {videoTitle, videoDesc, embedId, videoId} ) => (
  <div id={videoId} className="video">
    <div class="container">
      <div class="row align-items-start my-5">
        <div class="col-lg-7">
          <YoutubeEmbed embedId={embedId}/>
        </div>
        <div class="col-lg-5">
          <h1 class="font-weight-light">{videoTitle}</h1>
          <p>
            {videoDesc}
          </p>
        </div>
      </div>
      <hr/>
    </div>
  </div>
);

const YoutubeEmbed = ( { embedId } ) => (
  <div className="video-responsive embed-responsive embed-responsive-16by9">
    <iframe
      className="embed-responsive-item"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default Video;