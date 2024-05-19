import style from './Categories.module.scss';

const Categories = () => {
  return (
    <div className={style.catCont}>
      <h3 className={style.title}>Categories</h3>
      <ul className={style.liCont}>
        <li>All</li>
        <li>Men</li>
        <li>Women</li>
      </ul>
    </div>
  );
};

export default Categories;
