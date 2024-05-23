import { FaClock } from 'react-icons/fa';
import style from './Logo.module.scss';
const Logo = () => {
  return (
    <div className={style.oclock}>
      <h1>
        <FaClock />
      </h1>
      <h1>- CLOCK</h1>
    </div>
  );
};

export default Logo;
