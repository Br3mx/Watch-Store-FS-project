import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productsRedux'; // Upewnij się, że masz odpowiednią ścieżkę do selektora
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import style from './SingleProduct.module.scss';
import { IMGS_URL } from '../../../config';
import BuyNow from '../../features/BuyNow/BuyNow';

import ButtonFavorite from '../../features/ButtonFavorite/ButtonFavorite';
import ButtonCart from '../../features/ButtonCart/ButtonCart';

const SingleProduct = () => {
  const { id } = useParams(); // Pobieramy ID produktu z parametrów routingu
  const product = useSelector((state) => getProductById(state, id)); // Używamy selektora, aby pobrać produkt

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Row>
              <Col md={6} className={style.contImg}>
                <Card.Img
                  variant="top"
                  src={`${IMGS_URL}/${product.folder}/${product.mainImg}`}
                  className={style.mainImg}
                />
              </Col>
              <Col
                md={6}
                style={{ paddingRight: '5rem', textAlign: 'center' }}
                className={style.item}
              >
                <Card.Title>
                  <h1 className={style.title}>{product.name}</h1>
                </Card.Title>
                <Card.Text className={style.cat}>
                  Category: {product.category}
                </Card.Text>
                <div className={style.overlay}>
                  <div className={style.icons}>
                    <ButtonCart product={product} />
                    <ButtonFavorite product={product} />
                  </div>
                </div>
              </Col>
              <Col
                style={{
                  textAlign: 'center',
                  padding: '2px 5rem',
                  fontSize: '1rem',
                }}
              >
                <Card.Body>
                  <h3 style={{ textAlign: 'left', padding: '0 0 20px 20px' }}>
                    Description:
                  </h3>
                  <Col className={style.contImg}>
                    <Carousel interval={2000} className={style.carousel}>
                      <Carousel.Item>
                        <img
                          className={`${style.carouselImage} d-block w-100`}
                          src={`${IMGS_URL}/${product.folder}/${product.Img1}`}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={`${style.carouselImage} d-block w-100`}
                          src={`${IMGS_URL}/${product.folder}/${product.Img2}`}
                          alt="Second slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={`${style.carouselImage} d-block w-100`}
                          src={`${IMGS_URL}/${product.folder}/${product.Img3}`}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                  <Card.Text className={style.description}>
                    {product.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> ${product.price}
                  </Card.Text>
                </Card.Body>
                <div className={style.buy}>
                  <BuyNow />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
