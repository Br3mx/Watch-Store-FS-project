import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../redux/userRedux';
import style from './NavBar.module.scss';
import logo from './icon/logo764.png';
import { FaClock, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../features/Logo/Logo';
const NavBar = () => {
  const user = useSelector(getUser);
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.length;

  return (
    <Navbar data-bs-theme="primary" className={`${style.navbar}  px-5`}>
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
          {!user && (
            <Nav.Link
              as={Link}
              to="/login"
              className={`${style.content}`}
              style={{ textDecoration: 'none' }}
            >
              Sign In
            </Nav.Link>
          )}
          {user && (
            <Nav.Link
              as={Link}
              to="/logout"
              className={`${style.content}`}
              style={{ textDecoration: 'none' }}
            >
              Sign Out
            </Nav.Link>
          )}
          {!user && (
            <Nav.Link
              as={Link}
              to="/register"
              className={`${style.content}`}
              style={{ textDecoration: 'none' }}
            >
              Sign Up
            </Nav.Link>
          )}
          {!user && (
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
          )}
          {!user && (
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
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
