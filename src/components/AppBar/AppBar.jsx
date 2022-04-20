import { NavLink } from 'react-router-dom';
import './AppBar.scss';
export default function AppBar() {
  //   const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className="header">
      <nav>
        <NavLink
          to="/"
          end
          // className={({ isActive }) => (isActive ? `active` : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="drivers"
          // className={({ isActive }) => (isActive ? `${styles.active}` : '')}
        >
          Drivers
        </NavLink>
        <NavLink
          to="cars"
          // className={({ isActive }) => (isActive ? `${styles.active}` : '')}
        >
          Cars
        </NavLink>
      </nav>

      {/* <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}
