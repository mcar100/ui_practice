import { Link } from "react-router-dom";

function HeaderNav() {
  const MENU_BAR = ["Home", "About", "Practice"];
  const PAGE_URL = ["/", "/about", "practice"];

  return (
    <nav className="header-navbar">
      <ul className="nav-menu">
        {MENU_BAR.map((nav, idx) => {
          return (
            <li className="nav-item">
              <Link to={PAGE_URL[idx]}>{nav}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default HeaderNav;
