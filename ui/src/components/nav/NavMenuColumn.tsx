import { Link } from 'react-router';

import type { INavMenuColumn } from '@/lib/types';
import './NavMenuColumn.css';

type NavMenuColumnProps = {
  columnWithItems: INavMenuColumn;
};

const NavMenuColumn = ({ columnWithItems }: NavMenuColumnProps) => (
  <div>
    <Link to={`/collections/${columnWithItems.titleLink}`}>
      <h3 className="nav-menu-column__title">{columnWithItems.title}</h3>
    </Link>
    <ul className="nav-menu-column__list">
      {columnWithItems?.endItems &&
        columnWithItems.endItems.map((item) => (
          <li className="nav-menu-column__text" key={item.link}>
            <Link to={`/collections/${item.link}`}>{item.text}</Link>
          </li>
        ))}
    </ul>
  </div>
);

export default NavMenuColumn;
