// CartProductPages.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import {
  updateProductQuantity,
  removeFromCart,
} from '../../../redux/cartRedux';
import style from './CartProductPages.module.scss';
import ButtonGoToOrder from '../../features/ButtonGoToOrder/ButtonGoToOrder';

const CartProductPages = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    cart.forEach((product) => {
      if (product.id) {
        // Sprawdź, czy product.id jest zdefiniowane
        initialQuantities[product.id] = product.quantity;
      }
    });
    return initialQuantities;
  });
  console.log('Quantities in CartProductPages:', quantities);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    setQuantities({ ...quantities, [productId]: quantity });
    dispatch(updateProductQuantity(productId, quantity));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const subtotal = cart.reduce((acc, product) => {
    if (!product.price) return acc;
    return acc + product.price * quantities[product.id];
  }, 0);
  const shippingCost = 10;
  const total = subtotal + shippingCost;

  const validCart = cart.filter(
    (product) => product.id && product.price && product.name,
  );

  if (validCart.length === 0) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
        No products in the cart.
      </h1>
    );
  }

  return (
    <div className={style.cartContainer}>
      <Card className={style.cartCard}>
        <Row>
          <Col xs={12} md={8}>
            {validCart.map((product) => (
              <Card key={product.id} className={`${style.productCard} mb-4 `}>
                <Row>
                  <Col xs={4} className={style.contImg}>
                    <Image
                      src={`${IMGS_URL}/${product.folder}/${product.mainImg}`}
                      thumbnail
                      className={style.cartImg}
                    />
                  </Col>
                  <Col xs={8}>
                    <Card.Body>
                      <Card.Title className={style.cardTitle}>
                        {product.name}
                      </Card.Title>
                      <Card.Text className={style.cardPrice}>
                        <strong>Price:</strong> $
                        {product.price ? product.price.toFixed(2) : 'N/A'}
                      </Card.Text>
                      <Form>
                        <Form.Group
                          as={Row}
                          controlId={`quantity-${product.id}`}
                        >
                          <Form.Label column xs="6">
                            Quantity: {quantities[product.id]} {/* Dodaj to */}
                          </Form.Label>
                          <Col xs="6">
                            <Form.Control
                              type="number"
                              value={quantities[product.id]}
                              onChange={(e) =>
                                handleQuantityChange(
                                  product.id,
                                  parseInt(e.target.value, 10),
                                )
                              }
                              min="1"
                              className={style.quantityInput}
                            />
                          </Col>
                        </Form.Group>
                      </Form>
                      <Card.Text className={style.cardTotal}>
                        <strong>Total:</strong> $
                        {product.price
                          ? (product.price * quantities[product.id]).toFixed(2)
                          : 'N/A'}
                      </Card.Text>
                      <Button
                        variant="danger"
                        className={style.buttonDan}
                        onClick={() => handleRemove(product.id)}
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <Col xs={12} md={4}>
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
              <ButtonGoToOrder quantities={quantities} />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CartProductPages;
