import {useState, useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  id: number;
}

function VideoPlayer({src, poster, id}: VideoPlayerProps): JSX.Element {

  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (id !== -1) {
      videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));
    }

    if (id !== -1 && !isLoading) {
      videoRef.current.play();
      return;
    }

    if (id === -1) {
      videoRef.current.pause();
    }

  }, [id, isLoading]);

  return (
    <video ref={videoRef} src={src} className="player__video" poster={poster}></video>
  );
}

export default VideoPlayer;
