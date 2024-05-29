import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import ButtonFavorite from '../../features/ButtonFavorite/ButtonFavorite';
import style from './Favorite.module.scss';
import { Link } from 'react-router-dom';
import ButtonCart from '../../features/ButtonCart/ButtonCart';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites);

  const validFavorite = favorites.filter(
    (product) => product.id && product.price && product.name,
  );

  if (validFavorite.length === 0) {
    return (
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '10px',
          width: '50%',
          margin: '15% auto',
          padding: '50px',
        }}
      >
        No products in the favorite.
      </h1>
    );
  }

  return (
    <div className={style.favoriteContainer}>
      <Row className="justify-content-center">
        {validFavorite.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={`${style.favoriteCard} mb-4`}>
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

export default Favorite;
