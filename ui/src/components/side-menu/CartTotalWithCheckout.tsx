import { HiLockClosed } from 'react-icons/hi';

import type { IPrice } from '@/lib/types';
import { formatPrice } from '@/lib/helpers';
import paypalIcon from '../../assets/icons/paypal.svg';
import visaIcon from '../../assets/icons/visa.svg';
import mastercardIcon from '../../assets/icons/mastercard.svg';
import CustomButton from '../ui/CustomButton';
import TextLink from '../ui/TextLink';
import './CartTotalWithCheckout.css';

type CartTotalWithCheckoutProps = {
  totalPrice: IPrice;
  shippingCosts: IPrice;
  onCheckout: () => void;
};

const CartTotalWithCheckout = ({ totalPrice, shippingCosts, onCheckout }: CartTotalWithCheckoutProps) => {
  const lockIcon = <HiLockClosed />;

  return (
    <section className="cart-total-with-checkout">
      <div className="cart-total-with-checkout__prices-container">
        <div className="cart-total-with-checkout__price-row cart-total-with-checkout__subtotal">
          <span>Subtotal</span>
          <span>{formatPrice(totalPrice.amount - shippingCosts.amount)}</span>
        </div>
        <div className="cart-total-with-checkout__price-row cart-total-with-checkout__shipping">
          <span>Estimated shipping costs</span>
          <span>{formatPrice(shippingCosts.amount)}</span>
        </div>
        <div className="cart-total-with-checkout__price-row cart-total-with-checkout__total">
          <span>Total</span>
          <span>{formatPrice(totalPrice.amount)}</span>
        </div>
        <p className="cart-total-with-checkout__shipping-info">
          Tax included. <TextLink navigateTo="/policies/shipping-policy" label="Shipping" /> calculated at checkout.
        </p>
      </div>
      <CustomButton
        buttonClasses={['cart-total-with-checkout__checkout-btn']}
        label="Checkout"
        icon={lockIcon}
        onClick={onCheckout}
      />
      <div className="cart-total-with-checkout__cards">
        <img src={paypalIcon} alt="PayPal" />
        <img src={visaIcon} alt="Visa" />
        <img src={mastercardIcon} alt="MasterCard" />
      </div>
    </section>
  );
};

export default CartTotalWithCheckout;
