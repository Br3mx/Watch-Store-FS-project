import { useSelector } from 'react-redux';
import ButtonFavorite from '../../features/ButtonFavorite/ButtonFavorite';
import ButtonCart from '../../features/ButtonCart/ButtonCart';
import { Card, Col, Row } from 'react-bootstrap';
import style from './CartProductPages.module.scss';
import { Link } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
const CartProductPages = () => {
  const cart = useSelector((state) => state.cart);

  if (!cart.length) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
        No Cart products.
      </h1>
    );
  }

  return (
    <div className={style.cartContainer}>
      <Row className="justify-content-center">
        {cart.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={`${style.cardCart} mb-4`}>
              <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                {' '}
                <Card.Img
                  variant="top"
                  src={`${IMGS_URL}/${product.folder}/${product.mainImg}`}
                  className={style.cardImg}
                />
                <Card.Body>
                  <Card.Title className={style.cardTitle}>
                    {product.name}
                  </Card.Title>

                  <Card.Text className={style.cardPrice}>
                    <strong>Price:</strong> ${product.price}
                  </Card.Text>
                </Card.Body>
              </Link>
              <Card.Body>
                <ButtonFavorite product={product} showLabel={false} />
                <ButtonCart product={product} showLabel={false} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default CartProductPages;
