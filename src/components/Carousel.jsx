import React from "react";
import Slider from "react-slick";

function Carousel() {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "180px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: "ease"
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <CarouselVideo
            videoTitle="Auntman"
            videoDesc="Antman meets his match when the newest coolest superhero kinda steals his thunder a little bit"
            videoImg="auntman_carousel.mp4"
            videoLink="/alan-cheng-film/skits#auntman"
          />
        </div>
        <div>
          <CarouselVideo
            videoTitle="Stupid American"
            videoDesc="As a child of immigrants, Ashley must decide whether to stick to what her parents want for her or forge a new path for herself"
            videoImg="stupid_carousel.mp4"
            videoLink="/alan-cheng-film/shorts#stupid-american"
          />
        </div>
        <div>
          <CarouselVideo
            videoTitle="I Love My Dad"
            videoDesc='A parody of popular video series from Genius Lyrics "Verified" where a very normal rapper with very normal feelings towards his father explains the lyrics for his song "I Love My Dad"'
            videoImg="dad_carousel.mp4"
            videoLink="/alan-cheng-film/skits#i-love-my-dad"
          />
        </div>
        <div>
          <CarouselVideo
            videoTitle="Hannibal"
            videoDesc="Just Hannibal's normal daily morning ritual"
            videoImg="hannibal_carousel.mp4"
            videoLink="/alan-cheng-film/shorts#hannibal"
          />
        </div>
        <div>
          <CarouselVideo
            videoTitle="Just Head and Arms Guy"
            videoDesc="Join Just Head and Arms Guy in a relaxing spiritual experience as he guides you through a meditative journey"
            videoImg="jhaag_carousel.mp4"
            videoLink="/alan-cheng-film/skits#just-head-and-arms-guy"
          />
        </div>
        <div>
          <CarouselVideo
            videoTitle="Untitled Fraud Documentary"
            videoDesc="Take a glimpse into the life of a con artist as he shares how he makes an honest living with this one simple trick"
            videoImg="fraud_carousel.mp4"
            videoLink="/alan-cheng-film/shorts#untitled-fraud-documentary"
          />
        </div>
      </Slider>
    </div>
  );
}

function CarouselVideo(props) {
  const { videoTitle, videoDesc, videoImg, videoLink } = props;

  var slideStyle = {
    width: "100%",
    objectFit: "cover"
  };

  return (
    <div>
      <a href={videoLink}>
        <div>
          <video autoPlay muted loop id="carousel-video" style={slideStyle}>
            <source src={`./alan-cheng-film/img/carousel_videos/${videoImg}`} type="video/mp4"/>
            Browser does not support embedded videos
          </video>
          {/* <img src={`/img/carousel_videos/${videoImg}`} alt={videoTitle}/> */}
          <div className="carousel-video-info" style={{position: "absolute", bottom: "10%"}}>
            <h2>{videoTitle}</h2>
            <p className="col-6">{videoDesc}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Carousel;