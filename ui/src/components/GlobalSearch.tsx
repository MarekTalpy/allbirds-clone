import type { ChangeEvent } from 'react';
import { HiX } from 'react-icons/hi';

import './GlobalSearch.css';

type GlobalSearchProps = {
  value: string;
  onSearchChange: (text: string) => void;
};

const GlobalSearch = ({ value, onSearchChange }: GlobalSearchProps) => {
  const clearInput = () => {
    onSearchChange('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="global-search">
      <input
        className="global-search__input"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
      />
      {value && (
        <button type="button" className="global-search__clear-btn" onClick={clearInput}>
          <HiX size={20} />
        </button>
      )}
    </div>
  );
};

export default GlobalSearch;
