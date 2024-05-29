import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getWatch } from '../../../redux/productsRedux';
import {
  Row,
  Card,
  Col,
  Container,
  Carousel,
  Pagination,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import style from './AllProducts.module.scss';
import Button1 from '../Button/Button';
import Categories from '../Categories/Categories';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import ButtonCart from '../ButtonCart/ButtonCart';
import BanerMarks from '../BanerMarks/BanerMarks';
import Video from '../Video/Video';

const ITEMS_PER_PAGE = 4;

const AllProducts = () => {
  const products = useSelector(getWatch);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (!filteredProducts) {
    filteredProducts = [];
  }

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <Container fluid>
      <Carousel className={style.carousel}>
        <Carousel.Item>
          <img
            className={`${style.carouselImage}`}
            src={`${IMGS_URL}/slider/img1.jpg`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${style.carouselImage}`}
            src={`${IMGS_URL}/slider/img2.jpg`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${style.carouselImage}`}
            src={`${IMGS_URL}/slider/img3.jpg`}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${style.carouselImage}`}
            src={`${IMGS_URL}/slider/img4.jpg`}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
      <Categories
        className={style.cat}
        onCategoryChange={handleCategoryChange}
      />
      <Row className={style.rowCard}>
        {totalPages > 1 && (
          <Pagination className={style.pagination}>
            <h3 className={style.pagesTitle}>Pages:</h3>
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
                className={style.paginationItemActive}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        )}
        {currentProducts.map((product) => (
          <Col key={product.id} xs={12} sm={0} md={4} lg={3} className={`mb-5`}>
            <Card className={style.contCard}>
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
                    <ButtonCart product={product} showLabel={false} />
                    <ButtonFavorite product={product} showLabel={false} />
                  </div>
                </div>
              </Row>
              <Card.Body className={style.cardBody}>
                <Card.Title className={style.prodTitle}>
                  {product.name}
                </Card.Title>
                <Card.Text className="mb-3 text-muted">
                  {product.model}
                </Card.Text>
                <Card className={style.price}>
                  <Card.Text className={style.label}>Price:</Card.Text>
                  <Card.Text className={style.oldPrice}>
                    {product.oldPrice ? product.oldPrice.toFixed(2) : ''}{' '}
                  </Card.Text>
                  <Card.Text className={style.newPrice}>
                    $ {product.price.toFixed(2)}
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
      <Video />
      <BanerMarks />
      {filteredProducts.length === 0 && <p>Products not found</p>}
    </Container>
  );
};

export default AllProducts;
