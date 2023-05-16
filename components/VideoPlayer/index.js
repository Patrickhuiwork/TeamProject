// VideoPlayer.js

import { useRef } from 'react';
import styles from './VideoPlayer.module.css'; 

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const stopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 10;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 10;
  };

  return (
    <div>
      <video ref={videoRef} className={styles['video-player']}>
        <source src='/video/final.mp4' type="video/mp4" />
      </video>
      <div className={styles.controls}>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={stopVideo}>Stop</button>
        <button onClick={forwardVideo}>Forward</button>
        <button onClick={rewindVideo}>Rewind</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
