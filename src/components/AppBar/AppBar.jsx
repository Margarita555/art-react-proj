import './AppBar.scss';
export default function AppBar() {
  //   const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className="header">
      <ul class="list">
        <li class="item">
          {/* <a href="#" className="link"> */}
          Drivers
          {/* </a> */}
        </li>
        <li class="item">
          {/* <a href="#" class="link"> */}
          Cars
          {/* </a> */}
        </li>
      </ul>

      {/* <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}
