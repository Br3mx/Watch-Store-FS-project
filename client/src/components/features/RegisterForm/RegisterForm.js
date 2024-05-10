import { useState } from 'react';
import { Form, Alert, Spinner, Button } from 'react-bootstrap';
import { API_URL } from '../../../config';
import style from './RegisterForm.module.scss';
import Button1 from '../Button/Button.js';
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
    repeatPassword: '', // Dodajemy pole repeatPassword
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null, 'loading', 'success', 'serverError', 'loginError'
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.login) newErrors.login = 'Login is required';
    if (!formData.email) newErrors.email = 'email is required';
    if (!formData.email.includes('@')) newErrors.email = "'@' missing";
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.repeatPassword)
      newErrors.repeatPassword = 'Repeat Password is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
    }
    if (formData.phone.length < 9) {
      newErrors.phone = 'Min 9 numbers';
    }
    if (formData.phone.length > 12) {
      newErrors.phone = 'Max 12 numbers';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const fd = new FormData();
      fd.append('login', formData.login);
      fd.append('email', formData.email);
      fd.append('password', formData.password);
      fd.append('phoneNumber', formData.phone);
      fd.append('repeatPassword', formData.repeatPassword);
      const options = {
        method: 'POST',
        body: fd,
      };

      setStatus('loading');

      fetch(`${API_URL}/auth/register`, options).then((res) => {
        if (res.status === 201) {
          setStatus('success');
        } else if (res.status === 400) {
          setStatus('clientError');
        } else if (res.status === 409) {
          setStatus('loginError');
        } else {
          setStatus('serverError');
        }
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowRepeatPassword = () => {
    setShowRepeatPassword((prev) => !prev);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have been registered! You can now log in...</p>
        </Alert>
      )}

      {status === 'serverError' && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong...</Alert.Heading>
          <p>Unexpected error... Try again!</p>
        </Alert>
      )}

      {status === 'clientError' && (
        <Alert variant="danger">
          <Alert.Heading>Not enough data</Alert.Heading>
          <p>You have to fill all the fields</p>
        </Alert>
      )}

      {status === 'loginError' && (
        <Alert variant="warning">
          <Alert.Heading>Login already in use</Alert.Heading>
          <p>You have to use another login.</p>
        </Alert>
      )}

      {status === 'loading' && (
        <Spinner animation="border" role="status" className="d-block mx-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {/* Login */}
      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          name="login"
          value={formData.login}
          onChange={handleChange}
          placeholder="Enter login"
          isInvalid={errors.login}
        />
        <Form.Control.Feedback type="invalid">
          {errors.login}
        </Form.Control.Feedback>
      </Form.Group>
      {/* Email */}

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Password */}
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <div className="input-group">
          <Form.Control
            type={showPassword ? 'text' : 'password'} // Ustawienie typu na 'text' w przypadku, gdy showPassword jest true
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            isInvalid={errors.password}
          />
          <Button variant="outline-secondary" onClick={toggleShowPassword}>
            {showPassword ? 'Hide' : 'Show'}{' '}
            {/* Zmiana etykiety przycisku w zależności od stanu showPassword */}
          </Button>
        </div>
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Phone number */}
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          isInvalid={errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Repeat Password */}
      <Form.Group className="mb-3" controlId="formRepeatPassword">
        <Form.Label>Repeat Password</Form.Label>

        <div className={`${style.y} input-group `}>
          <Form.Control
            type={showRepeatPassword ? 'text' : 'password'}
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            placeholder="Repeat password"
            isInvalid={errors.repeatPassword}
          />

          <Button
            variant="outline-secondary"
            onClick={toggleShowRepeatPassword}
            className={style.hide}
          >
            {showRepeatPassword ? 'Hide' : 'Show'}
          </Button>
          <Form.Control.Feedback type="invalid">
            {errors.repeatPassword}
          </Form.Control.Feedback>
        </div>
      </Form.Group>

      <Button1 className={style.Button} type="submit">
        Submit
      </Button1>
    </Form>
  );
};

export default RegisterForm;
