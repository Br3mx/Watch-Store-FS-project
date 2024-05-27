import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button1 from '../Button/Button';

const ButtonGoToOrder = ({ quantities }) => {
  const getTotalQuantity = () => {
    return Object.values(quantities).reduce(
      (total, quantity) => total + quantity,
      0,
    );
  };

  return (
    <Link
      to={{ pathname: '/order', state: { quantities } }}
      style={{ textDecoration: 'none' }}
    >
      <button>Go to Order ({getTotalQuantity()})</button>
    </Link>
  );
};

export default ButtonGoToOrder;
