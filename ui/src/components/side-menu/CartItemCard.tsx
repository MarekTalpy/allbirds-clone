import { useState } from 'react';

import type { IOrderItem } from '@/lib/types';
import TextLink from '../ui/TextLink';
import { formatPrice } from '../../lib/helpers';
import './CartItemCard.css';
import { QuantityInput } from '../ui/QuantityInput';

type CartItemCardProps = {
  item: IOrderItem;
};

const IMG_SIZE_PX = 96;

const CartItemCard = ({ item }: CartItemCardProps) => {
  const { productId, name, imgUrl, price, quantity, model, size } = item;

  const [itemsCount, setItemsCount] = useState<number>(() => quantity);

  const handleCountChange = (value: number) => {
    setItemsCount(Number(value));
    console.log();
  };

  return (
    <div className="cart-item-card">
      <div className="cart-item-card__img-wrapper">
        <img className="cart-item-card__img" src={imgUrl} alt={name} height={IMG_SIZE_PX} width={IMG_SIZE_PX}></img>
      </div>
      <div>
        <TextLink navigateTo={`/products/${productId}`} label={name} className="cart-item-card__title-link" />
        <p className="cart-item-card__price">{formatPrice(price.amount)}</p>
        <p className="cart-item-card__model-size">
          {model} / {size}
        </p>
      </div>
      <div className="cart-item-card__quantity-remove">
        <QuantityInput initialValue={itemsCount} onChange={handleCountChange} />
        <TextLink navigateTo={`/cart/change/${productId}`} label="Remove" className="cart-item-card__remove" />
      </div>
    </div>
  );
};

export default CartItemCard;
