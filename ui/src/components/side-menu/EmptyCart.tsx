import { useNavigate } from 'react-router';

import CustomButton from '../ui/CustomButton';
import CartIcon from '../ui/CartIcon';
import './EmptyCart.css';
import { HiX } from 'react-icons/hi';
import { SIDE_PANEL_ANIMATION_DURATION } from '@/lib/constants';

type EmptyCartProps = {
  onClose: () => void;
};

const EmptyCart = ({ onClose }: EmptyCartProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onClose();

    // Match animation (see .side-menu transition)
    setTimeout(() => {
      navigate(path);
    }, SIDE_PANEL_ANIMATION_DURATION);
  };

  return (
    <>
      <header className="cart-side-menu-content__header">
        <button className="cart-side-menu-content__close" onClick={onClose}>
          <HiX size={20}></HiX>
        </button>
      </header>
      <div className="empty-cart">
        <CartIcon size={60} badgeClass="empty-cart__badge" />
        <p className="empty-cart__title">Your cart is empty</p>
        <button onClick={() => handleNavigate('/collections/all')}>
          <CustomButton label="CONTINUE SHOPPING" />
        </button>
      </div>
    </>
  );
};

export default EmptyCart;
