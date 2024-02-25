import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import UIComponents from "./UIComponents";

const Video = ({ url, id, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="video box" id={id}>
      <div className="sub-video">
        <UIComponents
          id={`like-${id}`}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          title={title}
        />

        <VideoPlayer
          isPlaying={isPlaying}
          isMuted={isMuted}
          url={url}
          id={id}
        />

        <div className="slider">
          <div
            className="red"
            style={{
              height: "100%",
              background: "red",
            }}
          ></div>
          <div
            className="gray"
            style={{
              height: "100%",
              background: "gray",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Video;
