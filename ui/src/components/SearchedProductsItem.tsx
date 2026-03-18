import { Link } from 'react-router';

import type { ISearchedProduct } from '@/lib/types';
import { formatPrice } from '@/lib/helpers';
import './SearchedProductsItem.css';

type SearchedProductsItemProps = {
  product: ISearchedProduct;
};

const IMG_SIZE = 96;

const SearchedProductsItem = ({ product }: SearchedProductsItemProps) => {
  const { id, name, imgUrl, price } = product;

  return (
    <Link to={`/products/${id}`}>
      <article className="searched-products-item__wrapper">
        <img alt={name} src={imgUrl} width={IMG_SIZE} height={IMG_SIZE} loading="lazy" decoding="async"></img>
        <div>
          <h3 className="searched-products-item__name">{name}</h3>
          <p className="searched-products-item__price">{formatPrice(price.amount)}</p>
        </div>
      </article>
    </Link>
  );
};

export default SearchedProductsItem;
