import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      <Button variant="primary" block>
        Go to Order ({getTotalQuantity()})
      </Button>
    </Link>
  );
};

export default ButtonGoToOrder;
