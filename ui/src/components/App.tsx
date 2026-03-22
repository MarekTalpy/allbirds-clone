import { Route, Routes } from 'react-router';

import './App.css';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import AppLayout from './layout/AppLayout';
import CollectionDetail from './pages/CollectionDetail';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import LoginRecover from './pages/account/LoginRecover';

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="collections" element={<Collections />} />
        <Route path="collections/:collectionId" element={<CollectionDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="account">
          <Route path="login" element={<Login />} />
          <Route path="login-recover" element={<Register />} />
          <Route path="register" element={<LoginRecover />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
