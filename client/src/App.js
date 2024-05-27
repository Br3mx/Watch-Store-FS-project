import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProdRequest } from './redux/productsRedux';
import { loadLoggedUser, logOutUser } from './redux/userRedux';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import CartProductPages from './components/pages/CartProductPages/CartProductPages';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';
import NotFound from './components/pages/NotFound/NotFound';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Logout from './components/pages/Logout/Logout';
import OrderFromPages from './components/pages/OrderFormPages/OrderFormPages';
import OrderConfirmation from './components/pages/OrderConfirmation/OrderConfirmation';
import Favorite from './components/pages/Favorite/Favorite';
import OrderFromPagesCart from './components/pages/OrderFromPagesCart/OrderFromPagesCart';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProdRequest());
    dispatch(loadLoggedUser());
  }, [dispatch]);

  return (
    <MainLayout>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart-products" element={<CartProductPages />} />
          <Route path="/order/:productId" element={<OrderFromPages />} />
          <Route path="/order" element={<OrderFromPagesCart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </MainLayout>
  );
};

export default App;
