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

    if (!isLoading) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [id, isLoading]);

  return (
    <video src={src} className="player__video" poster={poster}></video>
  );
}

export default VideoPlayer;
