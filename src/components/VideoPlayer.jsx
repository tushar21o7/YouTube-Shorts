import ReactPlayer from "react-player";

const VideoPlayer = ({ isPlaying, isMuted, url, id }) => {
  const handleProgress = ({ playedSeconds, loadedSeconds }) => {
    if (!loadedSeconds) return;
    const progress = Math.floor((playedSeconds * 100) / loadedSeconds);

    const red = document.querySelector(`#${id} div .slider .red`);
    const gray = document.querySelector(`#${id} div .slider .gray`);
    red.style.width = `${progress}%`;
    gray.style.width = `${100 - progress}%`;
  };

  return (
    <ReactPlayer
      playing={isPlaying}
      muted={isMuted}
      loop={true}
      url={url}
      width="305px"
      height="526px"
      onProgress={handleProgress}
    />
  );
};

export default VideoPlayer;
