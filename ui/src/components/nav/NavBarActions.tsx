import { Link } from 'react-router';
import { HiOutlineMenuAlt3, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';

import CartIcon from '../ui/CartIcon';
import './NavBarActions.css';
import { order } from '@/mocks/order';

type NavBarActionsProps = {
  onSearchOpen: () => void;
  onCartOpen: () => void;
  onMenuOpen: () => void;
};

const ICON_SIZE = 24;

const NavBarActions = ({ onSearchOpen, onCartOpen, onMenuOpen }: NavBarActionsProps) => {
  return (
    <>
      <button onClick={onSearchOpen} aria-label="Search">
        <HiOutlineSearch size={ICON_SIZE} />
      </button>

      <Link to="/account/login" aria-label="Profile">
        <HiOutlineUser size={ICON_SIZE} />
      </Link>

      <button className="nav-btn--cart" onClick={onCartOpen} aria-label="Cart">
        <CartIcon count={order?.items?.length} />
      </button>

      <button onClick={onMenuOpen} aria-label="Open Menu">
        <HiOutlineMenuAlt3 size={ICON_SIZE} />
      </button>
    </>
  );
};

export default NavBarActions;
