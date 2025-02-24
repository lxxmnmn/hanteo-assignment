import { useRef, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { CATEGORY } from '~/constants';

import './NavigationBar.scss';

const NavigationBar = () => {
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const activeNav = navRef.current?.querySelector('.active');
    if (activeNav) {
      activeNav.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [location.pathname]);

  return (
    <nav className="nav-bar" ref={navRef}>
      {CATEGORY.map((menu, index) => (
        <NavLink
          key={index}
          to={menu.path}
          className={location.pathname === menu.path ? 'active' : ''}
        >
          {menu.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavigationBar;
