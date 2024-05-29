import { useEffect } from 'react';
import style from './OrderConfirmation.module.scss';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ustawienie przekierowania po 3 sekundach
    const timer = setTimeout(() => {
      navigate('/'); // Przekierowanie na stronę główną
    }, 3000);

    // Czyszczenie timera przy unmount
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <main>
      <div>
        <div className={style.cont}>
          <h2>Order Confirmation</h2>
          <p>Your order has been placed successfully!</p>
        </div>
      </div>
    </main>
  );
};

export default OrderConfirmation;
