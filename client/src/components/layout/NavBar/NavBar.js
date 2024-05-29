import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, logOut, logOutUser } from '../../../redux/userRedux';
import style from './NavBar.module.scss';
import logo from './icon/logo764.png';
import { FaClock, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../features/Logo/Logo';
import { useEffect, useState } from 'react';
const NavBar = () => {
  //const user = useSelector(getUser);
  const cart = useSelector((state) => state.cart);

  const validCart = cart.filter(
    (product) => product.id && product.price && product.name,
  );
  const cartCount = validCart.length;
  const [scrolled, setScrolled] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      data-bs-theme="primary"
      className={`${style.navbar} ${scrolled ? style.scrolled : ''} px-5`}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className={`${style.content}`}
        style={{ textDecoration: 'none' }}
      >
        <img src={logo} />
      </Navbar.Brand>
      <Link
        to={'/'}
        className={style.contLog}
        style={{ textDecoration: 'none' }}
      >
        <Logo />
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse
        className={` ${style.collapse} justify-content-end px-3`}
      >
        <Nav>
          <Nav.Link
            as={Link}
            to="/"
            className={`${style.content}`}
            style={{ textDecoration: 'none' }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className={`${style.content}`}
            style={{ textDecoration: 'none' }}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/cart-products"
            className={`${style.content}`}
            style={{ textDecoration: 'none' }}
          >
            <div className={style.iconCont}>
              <FaShoppingCart className={style.cartIcon} />
              {cartCount > 0 && (
                <span className={style.cartCount}>{cartCount}</span>
              )}
            </div>
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/favorite"
            className={`${style.content}`}
            style={{ textDecoration: 'none' }}
          >
            <div className={style.iconCont}>
              <FaHeart className={style.heart} />
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
