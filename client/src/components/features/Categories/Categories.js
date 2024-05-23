import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Categories.module.scss';

const Categories = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category); // Pass the selected category to the parent component
  };

  return (
    <div className={style.catCont}>
      <h3 className={style.title}>Categories</h3>
      <ul className={style.liCont}>
        {['All', 'Men', 'Women'].map((category) => (
          <li
            key={category}
            className={activeCategory === category ? style.active : ''}
            onClick={() => handleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
