import { Row, Col } from 'react-bootstrap';
import style from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={`${style.footer} text-white my-4 py-4`}>
      <Row className={` align-items-center`}>
        <Col className="text-center" xs={12} md={4}>
          O-CLOCK &copy;
        </Col>
        <Col className="text-center my-4 my-md-0" xs={12} md={4}>
          Kodilla Bootcamp 2024
        </Col>
        <Col className="text-center" xs={12} md={4}>
          Przemysław Bulanda
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
