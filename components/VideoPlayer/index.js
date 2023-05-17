import { useRef } from 'react';
import VideoButton from '../VideoButton';
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
        <VideoButton onClick={playVideo}>Play</VideoButton>
        <VideoButton onClick={pauseVideo}>Pause</VideoButton>
        <VideoButton onClick={stopVideo}>Stop</VideoButton>
        <VideoButton onClick={forwardVideo}>Forward</VideoButton>
        <VideoButton onClick={rewindVideo}>Rewind</VideoButton>
      </div>
    </div>
  );
};

export default VideoPlayer;
