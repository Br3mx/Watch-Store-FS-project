import style from './Button.module.scss';

const Button1 = ({ children }) => {
  return <button className={style.button}>{children}</button>;
};

export default Button1;
