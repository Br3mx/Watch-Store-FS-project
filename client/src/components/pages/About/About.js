import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from './About.module.scss';

const About = () => {
  return (
    <Container className="mt-5">
      <Row className={` justify-content-center`}>
        <Col md={8} className={style.cont}>
          <h2 className={`${style.Title} mb-4`}>O Nas</h2>
          <p className={style.desc}>
            Witaj w świecie o-clock, miejscu, gdzie czas staje się znakiem
            wyrafinowanego stylu i niepowtarzalnej elegancji. Jesteśmy dumni z
            tego, że od lat dostarczamy naszym klientom nie tylko precyzyjne
            narzędzia do śledzenia czasu, ale także wyjątkowe dzieła sztuki,
            które podkreślają ich indywidualność i wyrażają ich unikalny styl
            życia.
          </p>
          <h3 className={`${style.Title} mt-4`}>Nasza Misja</h3>
          <p className={style.desc}>
            Nasza misja jest prosta - dostarczać najwyższej jakości zegarki,
            które nie tylko spełniają funkcję praktyczną, ale również stają się
            inspiracją do wyrażania siebie i podkreślania własnej osobowości.
            Chcemy, aby każdy zegarek o-clock był symbolem nie tylko czasu, ale
            także pasji, determinacji i stylu.
          </p>
          <h3 className={`${style.Title} mt-4`}>Nasza Historia</h3>
          <p className={style.desc}>
            o-clock to historia pasji do czasu i nieustannej dbałości o
            doskonałość w każdym detalu. Nasza firma powstała z miłości do
            zegarków i pragnienia dzielenia się tą pasją z innymi. Od pierwszego
            dnia naszego istnienia dążymy do tego, aby nasze zegarki były nie
            tylko piękne, ale także funkcjonalne i trwałe.
          </p>
          <h3 className={`${style.Title} mt-4`}>Nasza Oferta</h3>
          <p className={style.desc}>
            W naszym sklepie oferujemy szeroki wybór zegarków, które spełnią
            oczekiwania nawet najbardziej wymagających klientów. Od klasycznych
            modeli, które nigdy nie wychodzą z mody, po nowoczesne wzornictwo,
            które przyciąga uwagę i inspiruje do wyrażania siebie. Niezależnie
            od tego, czy szukasz zegarka na co dzień, czy też eleganckiego
            dodatku na specjalne okazje, w o-clock znajdziesz idealny model dla
            siebie.
          </p>
          <h3 className={`${style.Title} mt-4`}>Dołącz Do Nas</h3>
          <p className={style.desc}>
            Dołącz do społeczności o-clock i pozwól swojemu czasowi zaistnieć w
            wyjątkowy sposób. Odkryj naszą kolekcję zegarków, inspirowanych
            różnorodnymi stylami i osobowościami, i znajdź ten jeden, który
            idealnie odzwierciedla Twoją wyjątkowość. Czas na o-clock - czas na
            wyrażanie siebie w najlepszy możliwy sposób.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
