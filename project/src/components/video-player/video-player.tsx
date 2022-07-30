import {useState, useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  id: number;
}

function VideoPlayer({src, poster, id}: VideoPlayerProps): JSX.Element {

  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (id !== -1) {
      videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));
    }

    if (id !== -1 && !isLoading) {
      setTimeout (() => videoRef.current?.play(), 1000);
      return;
    }

    if (id === -1) {
      videoRef.current.pause();
    }

  }, [id, isLoading]);

  return (
    <video ref={videoRef} src={id === -1 ? poster : src} className="player__video" poster={poster} muted></video>
  );
}

export default VideoPlayer;
