import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';

const MainLayout = ({ children }) => (
  <>
    <NavBar />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default MainLayout;
