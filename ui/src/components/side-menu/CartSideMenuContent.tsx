import CartWithItems from './CartWithItems';
import EmptyCart from './EmptyCart';
import { order } from '@/mocks/order';
import type { IOrder } from '@/lib/types';
import './CartSideMenuContent.css';

type CartSideMenuContentProps = {
  onClose: () => void;
};

const CartSideMenuContent = ({ onClose }: CartSideMenuContentProps) => {
  const myOrder: IOrder = { ...order };

  return (
    <div className="cart-side-menu-content">
      {myOrder?.items?.length > 0 ? (
        <CartWithItems onClose={onClose} order={myOrder} />
      ) : (
        <EmptyCart onClose={onClose} />
      )}
    </div>
  );
};

export default CartSideMenuContent;
