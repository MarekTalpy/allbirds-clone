import type { ISearchedProduct } from '@/lib/types';
import SearchedProductsItem from './SearchedProductsItem';
import './SearchedProductsList.css';

type SearchedProductsListProps = {
  products: ISearchedProduct[];
};

const SearchedProductsList = ({ products }: SearchedProductsListProps) => {
  return products.map((product) => (
    <li className="searched-products-list__item" key={product.id}>
      <SearchedProductsItem product={product} />
    </li>
  ));
};

export default SearchedProductsList;
