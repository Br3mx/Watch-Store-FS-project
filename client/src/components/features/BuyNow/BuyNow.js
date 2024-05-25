import React from 'react';
import './BuyNow.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
const BuyNow = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleBuyNow = () => {
    navigate(`/order/${id}`);
  };
  return (
    <>
      <button onClick={handleBuyNow}>Buy Now</button>
    </>
  );
};

export default BuyNow;
