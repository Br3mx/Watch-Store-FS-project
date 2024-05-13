import { useDispatch, useSelector } from 'react-redux';

import { getWatch, loadProdRequest } from '../../../redux/productsRedux';
import { useEffect } from 'react';

const AllProducts = () => {
  const products = useSelector(getWatch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProdRequest());
  }, [dispatch]);
  return (
    <div>
      <h1>All Watches</h1>
      {products ? (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak produktów do wyświetlenia.</p>
      )}
    </div>
  );
};

export default AllProducts;
