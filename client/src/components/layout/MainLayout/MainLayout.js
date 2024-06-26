import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';
import style from './MainLayout.module.scss';
import Contact from '../Contact/Contact';

const MainLayout = ({ children }) => (
  <div className={style.wrapper}>
    <NavBar className={style.navbar} />
    <Container className={style.content}>{children}</Container>
    <Contact />
    <Footer />
  </div>
);

export default MainLayout;
