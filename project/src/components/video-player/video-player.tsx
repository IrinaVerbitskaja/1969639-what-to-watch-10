import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  activeCard: boolean;
}

function VideoPlayer({src, poster, activeCard}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = activeCard && setTimeout(() => videoRef.current?.play(), 1000);

    !activeCard && videoRef.current?.load();

    return () => {
      timer && clearTimeout(timer);
    };

  }, [activeCard]);

  return (
    <video ref={videoRef} src={src} className="player__video" poster={poster} muted preload="metadata"></video>
  );
}

export default VideoPlayer;
