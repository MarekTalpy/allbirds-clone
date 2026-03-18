import { createPortal } from 'react-dom';

import './SideMenu.css';

type SideMenuProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const SideMenu = ({ isOpen, children }: SideMenuProps) => {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <aside className={`side-menu ${isOpen ? 'side-menu--open' : ''}`}>{children}</aside>,
    document.body,
  );
};

export default SideMenu;
