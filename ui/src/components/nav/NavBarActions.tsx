import { Link } from 'react-router';
import { HiOutlineMenuAlt3, HiOutlineSearch, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi';

type NavBarActionsProps = {
  onSearchOpen: () => void;
  onCartOpen: () => void;
  onMenuOpen: () => void;
};

const ICON_SIZE = 24;

const NavBarActions = ({ onSearchOpen, onCartOpen, onMenuOpen }: NavBarActionsProps) => {
  return (
    <>
      <button className="nav-btn" onClick={onSearchOpen} aria-label="Search">
        <HiOutlineSearch size={ICON_SIZE} />
      </button>

      <Link to="/account/login" className="nav-btn" aria-label="Profile">
        <HiOutlineUser size={ICON_SIZE} />
      </Link>

      <button className="nav-btn" onClick={onCartOpen} aria-label="Cart">
        <HiOutlineShoppingBag size={ICON_SIZE} />
      </button>

      <button className="nav-btn nav-btn--menu" onClick={onMenuOpen} aria-label="Open Menu">
        <HiOutlineMenuAlt3 size={ICON_SIZE} />
      </button>
    </>
  );
};

export default NavBarActions;
