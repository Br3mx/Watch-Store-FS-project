import React from 'react';
import { IMGS_URL } from '../../../config';
import style from './BanerMarks.module.scss';
const BanerMarks = () => {
  const brandImages = [
    'baner1.png',
    'baner2.png',
    'baner3.png',
    'baner4.png',
    'baner5.png',
    'baner6.png',
    'baner7.png',
    'baner8.png',
  ];

  return (
    <>
      <div className={style.slider}>
        <div className={style.slideTrack}>
          {brandImages.map((image) => (
            <div className={style.slide}>
              <img
                src={`${IMGS_URL}/BANER/${image}`}
                height="100"
                width="150"
              />
            </div>
          ))}
          {brandImages.map((image) => (
            <div className={style.slide}>
              <img src={`${IMGS_URL}/BANER/${image}`} height="90" width="180" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BanerMarks;
