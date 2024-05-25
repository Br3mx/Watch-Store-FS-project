import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { addToCart, removeFromCart } from '../../../redux/cartRedux';
import style from './ButtonCart.module.scss';

const ButtonCart = ({ product, showLabel = true }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isAd =
    Array.isArray(cart) && cart.some((cart) => cart.id === product.id);

  const handleCartClick = () => {
    if (isAd) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <>
      <FaShoppingCart
        className={`${style.icon} ${isAd ? style.cart : ''}`}
        onClick={handleCartClick}
      />
      {showLabel && <h6>{isAd ? 'Remove from cart' : 'Add to Cart'}</h6>}
    </>
  );
};

export default ButtonCart;
