import { Col, Row } from 'react-bootstrap';
import LoginForm from '../../features/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <h1 className="text-center">Sign up</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <LoginForm />
        </Col>
      </Row>
    </>
  );
};
export default Login;
