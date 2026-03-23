import { HiX } from 'react-icons/hi';

import EmptyCart from './EmptyCart';
import './CartSideMenuContent.css';

type CartSideMenuContentProps = {
  onClose: () => void;
};

const CartSideMenuContent = ({ onClose }: CartSideMenuContentProps) => {
  return (
    <div className="cart-side-menu-content">
      <header className="cart-side-menu-content__header">
        <button className="cart-side-menu-content__close" onClick={onClose}>
          <HiX size={20}></HiX>
        </button>
      </header>
      <section className="cart-side-menu-content__empty-cart">
        <EmptyCart onClose={onClose} />
      </section>
    </div>
  );
};

export default CartSideMenuContent;
