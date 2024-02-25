import Video from "../components/Video";
import { videos } from "../assets";
import { titles } from "../assets";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const VideoContainer = () => {
  const handleClick = (direction) => {
    const videoContainer = document.getElementById("video-container");
    const pos = videoContainer.scrollTop + 300 * direction;

    videoContainer.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };

  const videoArray = [];
  for (let i = 0; i < 8; i++) {
    videoArray[i] = { url: videos[i], title: titles[i], id: `video-${i}` };
  }

  return (
    <>
      <div id="video-container" className="video-container">
        {videoArray &&
          videoArray.map((video) => {
            const { url, id, title } = video;
            return <Video key={id} url={url} id={id} title={title} />;
          })}
      </div>

      <button className="btn scroll-up" onClick={() => handleClick(-1)}>
        <FaArrowUp className="nav" />
      </button>
      <button className="btn scroll-down" onClick={() => handleClick(1)}>
        <FaArrowDown className="nav" />
      </button>
    </>
  );
};

export default VideoContainer;
