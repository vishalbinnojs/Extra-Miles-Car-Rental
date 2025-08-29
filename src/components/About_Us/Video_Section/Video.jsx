import React,{useState} from "react";
import "./Video.css"

const Video = ({bgImage}) => {
    const [playVideo, setPlayVideo] = useState(false);

const closeVideo = (e) =>{
if(e.target.classList.contains("overlay-active")){
  setPlayVideo(!playVideo)
}
    }
  return (
    <>
    <section className="video-banner" >
        <div className="background-img" style={{background:`url(${bgImage})`,backgroundRepeat:"no-repeat", backgroundPosition:"center",backgroundSize:"cover",width:"100%", height:"100%"}}></div>

        <div className="overlay"></div>

        {!playVideo && (
          <div className="play-button-container">
            <span className="ripple"></span>
            <div className="play-button" onClick={() => setPlayVideo(true)}>
              <span className="play-icon"></span>
            </div>
          </div>
        )}

        {playVideo && (
          <div className="overlay-active slide-up" onClick={closeVideo}>
            <div className="video-wrapper " onClick={(e)=>e.stopPropagation()}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/h9dTYG1y21k?si=7_kITA84KqxJPS3u"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </section>
    
    </>
  )
};

export default Video;
