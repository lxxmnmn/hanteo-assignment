import { useLocation, NavLink } from 'react-router-dom';

import './NavigationBar.scss';

const MENU_LIST = [
  { name: '차트', path: '/chart' },
  { name: 'Whook', path: '/whook' },
  { name: '이벤트', path: '/event' },
  { name: '뉴스', path: '/news' },
  { name: '스토어', path: '/store' },
  { name: '충전소', path: '/charger' },
  { name: '메뉴1', path: '/menu1' },
  { name: '메뉴2', path: '/menu2' },
  { name: '메뉴3', path: '/menu3' },
] as const;

const NavigationBar = () => {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      {MENU_LIST.map((menu, index) => (
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
