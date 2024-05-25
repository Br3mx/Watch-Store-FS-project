import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../../redux/favoriteRedux';
import { FaHeart } from 'react-icons/fa';
import style from './ButtonFavorite.module.scss';

const ButtonFavorite = ({ product, showLabel = true }) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isFavorite =
    Array.isArray(favorites) && favorites.some((fav) => fav.id === product.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <>
      <FaHeart
        className={`${style.icon} ${isFavorite ? style.favorite : ''}`}
        onClick={handleFavoriteClick}
      />
      {showLabel && (
        <h6>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</h6>
      )}
    </>
  );
};

export default ButtonFavorite;
