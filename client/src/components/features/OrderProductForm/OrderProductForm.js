import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IMGS_URL, API_URL } from '../../../config';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { getProductById } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const OrderProductForm = () => {
  const { productId } = useParams();
  const { clientId } = useParams();
  const product = useSelector((state) => getProductById(state, productId));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    quantity: 1,
  });
  const navigate = useNavigate();
  const [price, setPrice] = useState(product.price); // Stan przechowujący aktualną cenę produktu

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'quantity') {
      // Obliczanie nowej ceny przy zmianie ilości produktu
      const newPrice = product.price * parseInt(value);
      setPrice(newPrice);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        productId: productId,
        clientId: clientId,
        ...formData,
      };

      const response = await axios.post(`${API_URL}/orders`, orderData);
      console.log('Order submitted:', response.data);
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Error submitting order:', error);
      console.error('Response from server:', error.response); // Dodaj tę linię
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Order Product
              </Card.Title>
              <Card className="mb-4">
                <Row className="g-0">
                  <Col md={1}>
                    <Card.Img
                      src={`${IMGS_URL}/${product.folder}/${product.mainImg}`}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        <strong>Price: </strong>${price}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="quantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="1"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderProductForm;
