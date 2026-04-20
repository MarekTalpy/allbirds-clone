import { Route, Routes } from 'react-router';

import './App.css';
import Home from './pages/Home';
import Collections from './pages/Collections';
import CollectionDetail from './pages/CollectionDetail';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import AppLayout from './layout/AppLayout';
import Register from './pages/account/Register';
import Login from './pages/account/Login';
import LoginRecover from './pages/account/LoginRecover';
import ShippingPolicy from './pages/policies/ShippingPolicy';

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="collections" element={<Collections />} />
        <Route path="collections/:collectionId" element={<CollectionDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout/:orderId" element={<Checkout />} />
        <Route path="account">
          <Route path="login" element={<Login />} />
          <Route path="login-recover" element={<Register />} />
          <Route path="register" element={<LoginRecover />} />
        </Route>
        <Route path="policies">
          <Route index element={<NotFound />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
