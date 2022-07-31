import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  activeCard: boolean;
}

function VideoPlayer({src, poster, activeCard}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    let timer;

    if (activeCard) {
      timer = setTimeout (() => videoRef.current?.play(), 1000);
    }

    if (!activeCard) {
      clearTimeout(timer);
      videoRef.current.load();
    }

  }, [activeCard]);

  return (
    <video ref={videoRef} src={src} className="player__video" poster={poster} muted preload="metadata"></video>
  );
}

export default VideoPlayer;
