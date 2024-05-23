import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';
import Categories from '../../features/Categories/Categories';

const MainLayout = ({ children }) => (
  <>
    <NavBar />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default MainLayout;
