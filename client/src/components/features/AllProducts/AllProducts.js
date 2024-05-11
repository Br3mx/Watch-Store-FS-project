import { useDispatch, useSelector } from 'react-redux';

import { getWatch, loadProdRequest } from '../../../redux/productsRedux';
import { useEffect } from 'react';

const AllProducts = () => {
  const watches = useSelector(getWatch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProdRequest());
  }, [dispatch]);
  return (
    <div>
      <h1>All Watches</h1>
      {watches ? (
        <ul>
          {watches.map((watch) => (
            <li key={watch._id}>
              {watch.name} - {watch.price}
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
