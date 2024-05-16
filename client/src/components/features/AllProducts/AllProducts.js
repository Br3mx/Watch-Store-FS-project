import { useDispatch, useSelector } from 'react-redux';
import { getWatch, loadProdRequest } from '../../../redux/productsRedux';
import { useEffect } from 'react';
import { Row, Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './AllProducts.module.scss';
import { IMGS_URL } from '../../../config';
import Button1 from '../Button/Button';
const AllProducts = () => {
  const products = useSelector(getWatch);

  return (
    <Row>
      <Card.Title className={`${style.title} mt-4 mb-4`}>
        All Watches
      </Card.Title>
      {products ? (
        <Row>
          {products.map((product) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              className="mb-4"
            >
              <Card style={{ width: '100%', margin: '0', padding: '0' }}>
                <Card.Img
                  variant="top"
                  className={style.cardImage}
                  src={`${IMGS_URL}/adriatica/${product.mainImg}`}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="mb-3 text-muted">
                    {product.model}
                  </Card.Text>

                  <Link to={`/products/${product.id}`}>
                    <Button1 variant="primary">Read more...</Button1>
                  </Link>
                  <Card.Text className={style.price}>
                    Price: {product.oldPrice} {product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Products not found</p>
      )}
    </Row>
  );
};

export default AllProducts;
