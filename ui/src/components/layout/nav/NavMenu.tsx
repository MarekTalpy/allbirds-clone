import type { INavMenuColumn } from '@/lib/types';
import NavMenuColumn from './NavMenuColumn';
import './NavMenu.css';

type NavMenuProps = {
  columns?: INavMenuColumn[];
};

const NavMenu = ({ columns = [] }: NavMenuProps) => {
  return (
    <ul className="nav-menu">
      {columns.map((menuColumn) => (
        <NavMenuColumn key={menuColumn.columnTitleLink} columnWithItems={menuColumn}></NavMenuColumn>
      ))}
    </ul>
  );
};
export default NavMenu;
