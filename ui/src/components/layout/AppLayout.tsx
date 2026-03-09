import { Outlet } from 'react-router';

import './AppLayout.css';
import InfoBar from './InfoBar';
import NavBar from './nav/NavBar';
import AppFooter from './AppFooter';

const AppLayout = () => {
  return (
    <>
      <aside>
        <InfoBar />
      </aside>
      <header>
        <NavBar />
      </header>
      <main className="app-layout__main">
        <Outlet />
      </main>
      <footer>
        <AppFooter></AppFooter>
      </footer>
    </>
  );
};

export default AppLayout;
