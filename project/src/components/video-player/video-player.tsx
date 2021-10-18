import {useRef, useEffect} from 'react';

type VideoPlayerProps = {
  previewVideoLink: string;
  previewImage: string;
}

function VideoPlayer({previewVideoLink, previewImage}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.muted = true;
      videoRef.current.autoplay = true;
    }
  });


  return (
    <video src={previewVideoLink} className="player__video" poster={previewImage} ref={videoRef}></video>
  );
}

export default VideoPlayer;
