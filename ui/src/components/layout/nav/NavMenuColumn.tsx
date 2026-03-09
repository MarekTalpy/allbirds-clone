import { Link } from 'react-router';

import type { INavMenuColumn } from '@/lib/types';
import './NavMenuColumn.css';

type NavMenuColumnProps = {
  columnWithItems: INavMenuColumn;
};

const NavMenuColumn = ({ columnWithItems }: NavMenuColumnProps) => (
  <div>
    <Link to={`/collections/${columnWithItems.columnTitleLink}`}>
      <h3 className="nav-menu-column__title">{columnWithItems.columnTitle}</h3>
    </Link>
    <ul className="nav-menu-column__list">
      {columnWithItems.columnItems.map((item) => (
        <Link to={`/collections/${item.link}`}>
          <li className="nav-menu-column__text">{item.text}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default NavMenuColumn;
