import React from 'react';
import { IMGS_URL } from '../../../config';

const Video = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '50px 0',
      }}
    >
      <video
        src={`${IMGS_URL}/video/ads-watch.mp4`}
        autoPlay
        loop
        height={300}
        style={{
          width: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
          boxShadow: '0 0 100px 0 rgba(255, 255, 255, 0.8)',
        }}
        muted
      ></video>
    </div>
  );
};

export default Video;
