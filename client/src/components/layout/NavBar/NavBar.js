import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../redux/userRedux';
import style from './NavBar.module.scss';
import logo from './icon/logo764.png';
const NavBar = () => {
  const user = useSelector(getUser);

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
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
