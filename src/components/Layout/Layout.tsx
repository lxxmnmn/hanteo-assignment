import { Outlet } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import { Footer } from './Footer';

import './Layout.scss';

const Layout = () => {
  return (
    <div className="container">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
