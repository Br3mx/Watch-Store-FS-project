import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Card, Form, Button, Container } from 'react-bootstrap';
import { IMGS_URL, API_URL } from '../../../config';
import { updateProductQuantity } from '../../../redux/cartRedux'; // Assuming you have an action to update product quantity
import style from './OrderFromPagesCart.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderFromPagesCart = () => {
  const location = useLocation();
  const initialQuantities = location.state?.quantities || {};
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const [localQuantities, setLocalQuantities] = useState(initialQuantities);

  useEffect(() => {
    setLocalQuantities(initialQuantities);
  }, [initialQuantities]);

  const handleQuantityChange = (productId, quantity) => {
    setLocalQuantities({ ...localQuantities, [productId]: quantity });
    dispatch(updateProductQuantity(productId, quantity));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        products: cart.map((product) => ({
          productId: product.id,
          quantity: quantities[product.id],
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

  const subtotal = cart.reduce(
    (acc, product) => acc + product.price * quantities[product.id],
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
                {cart.map((product) => (
                  <Card
                    key={product.id}
                    className={`${style.productCard} mb-4`}
                  >
                    <Row noGutters>
                      <Col md={4}>
                        <Card.Img
                          src={`${IMGS_URL}/${product.folder}/${product.mainImg}`}
                          className={style.cartImg}
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>
                            <strong>Price: </strong>${product.price.toFixed(2)}
                          </Card.Text>
                          <Form.Group controlId={`quantity-${product.id}`}>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                              type="number"
                              name="quantity"
                              value={quantities[product.id]}
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
                            {(product.price * quantities[product.id]).toFixed(
                              2,
                            )}
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
                  <h5>Order Summary</h5>
                  <p>
                    <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
                  </p>
                  <p>
                    <strong>Shipping:</strong> ${shippingCost.toFixed(2)}
                  </p>
                  <p>
                    <strong>Total:</strong> ${total.toFixed(2)}
                  </p>
                </div>
                <Button variant="primary" type="submit" block>
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

export default OrderFromPagesCart;
