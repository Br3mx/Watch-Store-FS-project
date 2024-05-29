import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
import style from './Contact.module.scss';

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = '+48 555 555 555'; // Tutaj podaj rzeczywisty numer telefonu

  const handleClick = () => {
    setShowPhone(!showPhone);
  };

  return (
    <>
      <div>
        <div className={style.contactContainer}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className={style.socialLink}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className={style.socialLink}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            className={style.socialLink}
          >
            <FaTwitter />
          </a>
          <div className={style.contactHeader}>
            <h1>Contact us</h1>
          </div>
          <div
            className={`${style.phone} ${showPhone ? style.phoneActive : ''}`}
            onClick={handleClick}
          >
            <FaPhone style={{ marginRight: '10px' }} />
            {showPhone ? phoneNumber : ' Phone'}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
