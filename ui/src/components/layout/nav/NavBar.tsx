import { menuItems } from '@/lib/constants';
import appLogo from '@/assets/images/logo-title.png';
import './NavBar.css';
import NavButton from './NavButton';
import NavMenu from './NavMenu';

const NavBar = () => (
  <div className="navbar">
    <nav className="navbar__nav">
      <ul className="navbar__nav-list">
        <li className="navbar__nav-list-item">
          <NavButton title="men">
            <NavMenu columns={menuItems.men} />
          </NavButton>
        </li>
        <li className="navbar__nav-list-item">
          <NavButton title="women">
            <NavMenu columns={menuItems.women} />
          </NavButton>
        </li>
        <li>
          <NavButton title="socks" />
        </li>
        <li>
          <NavButton title="sale" linkStyle={{ color: 'var(--color-danger)' }} />
        </li>
      </ul>
    </nav>
    <div className="navbar__logo-container">
      <img src={appLogo} alt="App logo" height={40} />
    </div>
    <div className="navbar__actions">Right side with buttons</div>
  </div>
);

export default NavBar;
