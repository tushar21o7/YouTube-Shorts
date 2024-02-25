import { IoIosPause } from "react-icons/io";
import { IoIosPlay } from "react-icons/io";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdVolumeOff } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

const UIComponents = ({ id, isPlaying, setIsPlaying, isMuted, setIsMuted, title }) => {
  const handleLike = () => {
    const likeBtn = document.getElementById(id);
    const isActive = likeBtn.classList.contains("active");

    isActive
      ? likeBtn.classList.remove("active")
      : likeBtn.classList.add("active");
  };

  return (
    <div className="flex ui-class">
      <div className="flex controls">
        <button
          className="control-btn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <IoIosPause /> : <IoIosPlay />}
        </button>
        <button className="control-btn" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <IoMdVolumeOff /> : <IoMdVolumeHigh />}
        </button>
      </div>

      <div className="flex" style={{ justifyContent: "end" }}>
        <button className="control-btn" onClick={handleLike}>
          <AiFillLike id={id} style={{ width: "20px", height: "20px" }} />
        </button>
      </div>

      <div className="video-title">{title}</div>
    </div>
  );
};

export default UIComponents;
