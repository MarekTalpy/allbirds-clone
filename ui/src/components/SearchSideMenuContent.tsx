import { useState } from 'react';

import './SearchSideMenuContent.css';
import GlobalSearch from './GlobalSearch';
import { searchedProducts } from '@/mocks/searchedProducts';
import SearchedProductsList from './SearchedProductsList';

const SearchSideMenuContent = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    console.log('Search input from child:', value);
  };

  return (
    <div className="search-side-menu-content">
      <section className="search-side-menu-content__search-container">
        <GlobalSearch value={searchValue} onSearchChange={handleSearchChange} />
      </section>
      <section className="search-side-menu-content__main">
        <ul>
          <SearchedProductsList products={searchedProducts} />
        </ul>
        {/* <p>No results could be found.</p> */}
      </section>
    </div>
  );
};

export default SearchSideMenuContent;
