import { useNavigate } from 'react-router';

import CustomButton from '../ui/CustomButton';
import CartIcon from '../ui/CartIcon';
import './EmptyCart.css';

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
    }, 400);
  };

  return (
    <div className="empty-cart">
      <CartIcon size={60} badgeClass="empty-cart__badge" />
      <p className="empty-cart__title">Your cart is empty</p>
      <button onClick={() => handleNavigate('/collections/all')}>
        <CustomButton label="CONTINUE SHOPPING" />
      </button>
    </div>
  );
};

export default EmptyCart;
