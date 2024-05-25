import { useSelector } from 'react-redux';
import { getWatch } from '../../../redux/productsRedux';
import { Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './AllProducts.module.scss';
import { IMGS_URL } from '../../../config';
import Button1 from '../Button/Button';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import logo from './icon/wristwatch_4305526.png';
import Categories from '../Categories/Categories';
import { useState } from 'react';

const AllProducts = () => {
  const products = useSelector(getWatch);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Row>
      <div className={style.logoCat}>
        <img className={style.logo} src={logo} />
        <Categories
          className={style.cat}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {filteredProducts ? (
        <Row>
          {filteredProducts.map((product) => (
            <Col
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              className="mb-4"
            >
              <Card
                className={style.contCard}
                style={{ width: '100%', margin: '0', padding: '0' }}
              >
                <Row className={style.contImg}>
                  <Link to={`/products/${product.id}`}>
                    <Card.Img
                      variant="top"
                      className={style.cardImage}
                      src={`${IMGS_URL}/${product.folder}/${product.mainImg}`}
                    />
                  </Link>
                  <div className={style.overlay}>
                    <div className={style.icons}>
                      <FaShoppingCart className={style.icon} />
                      <FaHeart className={style.icon} />
                    </div>
                  </div>
                </Row>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="mb-3 text-muted">
                    {product.model}
                  </Card.Text>
                  <Card className={style.price}>
                    <Card.Text className={style.label}>Price:</Card.Text>
                    <Card.Text className={style.oldPrice}>
                      {product.oldPrice}
                    </Card.Text>
                    <Card.Text className={style.newPrice}>
                      $ {product.price}
                    </Card.Text>
                  </Card>
                  <div className={style.button}>
                    <Link to={`/products/${product.id}`}>
                      <Button1 variant="primary">Read more...</Button1>
                    </Link>
                  </div>
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
