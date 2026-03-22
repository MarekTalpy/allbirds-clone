import { menuItems } from '@/lib/constants';
import appLogo from '@/assets/images/logo-title.png';
import './NavBar.css';
import NavButton from './NavButton';
import NavMenu from './NavMenu';
import NavBarActions from './NavBarActions';
import { useState } from 'react';
import SideMenu from '../layout/SideMenu';
import Overlay from '../layout/Overlay';
import SearchSideMenuContent from '@/components/side-menu/SearchSideMenuContent';
import CartSideMenuContent from '@/components/side-menu/CartSideMenuContent';
import MenuSideMenuContent from '@/components/side-menu/MenuSideMenuContent';
import { Link } from 'react-router';

type SidePanelContent = 'search' | 'cart' | 'menu';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSidePanelContent, setActiveSidePanelContent] = useState<SidePanelContent | null>(null);

  const handleSearchOpen = () => {
    setIsMenuOpen(true);
    setActiveSidePanelContent('search');
  };
  const handleCartOpen = () => {
    setIsMenuOpen(true);
    setActiveSidePanelContent('cart');
  };
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    setActiveSidePanelContent('menu');
  };

  const renderSideMenuContent = (): React.ReactNode => {
    let content: React.ReactNode | null = null;

    switch (activeSidePanelContent) {
      case 'search':
        content = <SearchSideMenuContent />;
        break;
      case 'cart':
        content = <CartSideMenuContent />;
        break;
      case 'menu':
        content = <MenuSideMenuContent onClose={() => setIsMenuOpen(false)} />;
        break;
    }

    return content;
  };

  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <ul className="navbar__nav-list">
          {menuItems.map((firstLevelItem) => {
            return firstLevelItem?.menuItems ? (
              <li key={firstLevelItem.titleLink}>
                <NavButton title={firstLevelItem.title}>
                  <NavMenu columns={firstLevelItem?.menuItems} />
                </NavButton>
              </li>
            ) : (
              <li key={firstLevelItem.titleLink}>
                <NavButton
                  title={firstLevelItem.title}
                  linkStyle={firstLevelItem?.isHighlighted ? { color: 'var(--color-danger)' } : {}}
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="navbar__logo-container">
        <Link to="/">
          <img className="navbar__logo-image" src={appLogo} alt="App logo" height={40} />
        </Link>
      </div>
      <div className="navbar__actions">
        <NavBarActions
          onSearchOpen={handleSearchOpen}
          onCartOpen={handleCartOpen}
          onMenuOpen={handleMenuOpen}
        ></NavBarActions>
      </div>

      <Overlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SideMenu isOpen={isMenuOpen}>{renderSideMenuContent()}</SideMenu>
    </div>
  );
};

export default NavBar;
