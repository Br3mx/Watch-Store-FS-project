import React, { useState } from 'react';
import style from './Categories.module.scss';

const Categories = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category); // Przekazanie wybranej kategorii do komponentu nadrzędnego
  };

  return (
    <div className={style.catNav}>
      <ul className={style.catList}>
        <h3 className={style.title}>Categories:</h3>

        {['All', 'Men', 'Women', 'Smartwatch'].map((category) => (
          <li
            key={category}
            className={`${style.catItem} ${
              activeCategory === category ? style.active : ''
            }`}
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
