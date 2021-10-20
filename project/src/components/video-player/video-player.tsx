import { useRef } from 'react';

type VideoPlayerProps = {
  previewVideoLink: string;
  previewImage: string;
}

function VideoPlayer({ previewVideoLink, previewImage }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <video autoPlay muted src={previewVideoLink} className="player__video" poster={previewImage} ref={videoRef}></video>
  );
}

export default VideoPlayer;
