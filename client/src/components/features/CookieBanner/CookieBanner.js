import React, { useState, useEffect } from 'react';
import style from './CookieBanner.module.scss';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className={style.overlay}>
        <div className={style.cookieBanner}>
          <p>
            Ta strona używa plików cookie do poprawy działania strony.
            Akceptując, zgadzasz się na ich użycie.
          </p>
          <button onClick={handleAccept}>Akceptuj</button>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
