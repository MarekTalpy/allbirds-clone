import { useNavigate } from 'react-router';
import { HiX } from 'react-icons/hi';

import type { IOrder } from '@/lib/types';
import CartItemCard from './CartItemCard';
import './CartWithItems.css';
import Separator from '../ui/Separator';
import CartTotalWithCheckout from './CartTotalWithCheckout';
import { SIDE_PANEL_ANIMATION_DURATION } from '@/lib/constants';

type CartWithItemsProps = {
  order: IOrder;
  onClose: () => void;
};

const CartWithItems = ({ order, onClose }: CartWithItemsProps) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();

    // Match animation (see .side-menu transition)
    setTimeout(() => {
      navigate(`/checkout/${order.id}`);
    }, SIDE_PANEL_ANIMATION_DURATION);
  };

  return (
    <>
      <header className="cart-with-items__header">
        <div className="cart-with-items__title">
          <p className="cart-with-items__title-text">Cart</p>
          <span className="cart-with-items__title-badge">{order?.items?.length}</span>
        </div>
        <button onClick={onClose}>
          <HiX size={20}></HiX>
        </button>
      </header>
      <section className="cart-with-items__cards">
        <ul className="card-with-items__card-list">
          {order?.items.map((item) => (
            <li key={item.productId}>
              <article>
                <CartItemCard item={item} />
              </article>
            </li>
          ))}
        </ul>
      </section>
      <Separator />
      <footer className="cart-with-items__footer">
        <CartTotalWithCheckout totalPrice={order.total} shippingCosts={order.shipping} onCheckout={handleCheckout} />
      </footer>
    </>
  );
};

export default CartWithItems;
