import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';

const MainLayout = ({ children }) => (
  <Container>
    <NavBar />
    {children}
    <Footer />
  </Container>
);

export default MainLayout;
