import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';
import ButtonFavorite from '../../features/ButtonFavorite/ButtonFavorite';
import style from './Favorite.module.scss';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites);

  if (!favorites.length) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
        No favorite products.
      </h1>
    );
  }

  return (
    <div className={style.favoriteContainer}>
      <Row className="justify-content-center">
        {favorites.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={`${style.favoriteCard} mb-4`}>
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
                <ButtonFavorite product={product} showLabel={false} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Favorite;
