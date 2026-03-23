import { HiOutlineShoppingCart } from 'react-icons/hi';

import './CartIcon.css';

type CartIconProps = {
  count?: number;
  size?: number;
  badgeClass?: string;
};

const CartIcon = ({ count = 0, size = 24, badgeClass }: CartIconProps) => {
  return (
    <div className="cart-icon">
      <HiOutlineShoppingCart size={size} />
      <span className={`cart-icon__badge ${badgeClass}`}>{count}</span>
    </div>
  );
};

export default CartIcon;
