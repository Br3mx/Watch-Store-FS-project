import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Card, Form, Button, Container } from 'react-bootstrap';
import { IMGS_URL, API_URL } from '../../../config';
import {
  removeFromCart,
  updateProductQuantity,
} from '../../../redux/cartRedux'; // Assuming you have an action to update product quantity
import style from './OrderFromPagesCart.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button1 from '../../features/Button/Button';
import { FaTimes } from 'react-icons/fa';

const OrderFromPagesCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validCart = cart.filter(
    (product) => product.id && product.price !== undefined && product.name,
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateProductQuantity(productId, quantity));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        products: cart.map((product) => ({
          productId: product.id,
          quantity: product.quantity,
          price: product.price,
        })),
        ...formData,
      };

      const response = await axios.post(`${API_URL}/orders`, orderData);
      console.log('Order submitted:', response.data);
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Error submitting order:', error);
      console.error('Response from server:', error.response);
    }
  };
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const subtotal = validCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );
  const shippingCost = 10;
  const total = subtotal + shippingCost;

  if (cart.length === 0) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
        No products in the cart.
      </h1>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Order Products
              </Card.Title>
              <div>
                {validCart.map((product) => (
                  <Card
                    key={product.id}
                    className={`${style.productCard} mb-4`}
                    style={{ position: 'relative' }}
                  >
                    <button
                      className={style.removeButton}
                      onClick={() => handleRemove(product.id)}
                    >
                      <FaTimes />
                    </button>
                    <Row>
                      <Col md={4} className={style.contImg}>
                        <Card.Img
                          src={`${IMGS_URL}/${product.folder}/${product.mainImg}`}
                          className={style.cartImg}
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <Card.Title style={{ fontSize: '13px' }}>
                            {product.name}
                          </Card.Title>
                          <Card.Text style={{ fontSize: '10px' }}>
                            <strong>Price: </strong>${product.price.toFixed(2)}
                          </Card.Text>
                          <Form.Group
                            style={{ marginTop: '-15px' }}
                            controlId={`quantity-${product.id}`}
                          >
                            <Form.Label style={{ fontSize: '12px' }}>
                              Quantity
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="quantity"
                              value={product.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  product.id,
                                  parseInt(e.target.value, 10),
                                )
                              }
                              min="1"
                            />
                          </Form.Group>
                          <Card.Text className={style.cardTotal}>
                            <strong>Total:</strong> $
                            {(product.price * product.quantity).toFixed(2)}
                          </Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
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
                <div className={style.summary}>
                  <h5 style={{ textAlign: 'center' }}>Order Summary</h5>
                  <p>
                    <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
                  </p>
                  <p>
                    <strong>Tax:</strong> ${shippingCost.toFixed(2)}
                  </p>
                  <p>
                    <strong>Total:</strong> ${total.toFixed(2)}
                  </p>
                </div>
                <div style={{ display: 'grid', placeItems: 'center' }}>
                  <Button1 type="submit">Submit Order</Button1>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderFromPagesCart;
