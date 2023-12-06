import HeaderNav from "./HeaderNav";
import LoginNav from "./login/Login";

function Header() {
  return (
    <header className="container">
      <div className="header-nav-container">
        <HeaderNav />
        <LoginNav />
      </div>
    </header>
  );
}

export default Header;
