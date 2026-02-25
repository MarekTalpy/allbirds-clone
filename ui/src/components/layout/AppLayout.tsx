import { Outlet } from 'react-router';
import InfoBar from './InfoBar';
import NavBar from './NavBar';
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
      <main>
        <Outlet />
      </main>
      <footer>
        <AppFooter></AppFooter>
      </footer>
    </>
  );
};

export default AppLayout;
