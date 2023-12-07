import { Link } from "react-router-dom";
import { MENU_BAR, NAV_URL } from "../../utils/constants";

function HeaderNav() {
  const menuBar = MENU_BAR;
  const navURL = NAV_URL;

  return (
    <nav className="header-navbar">
      <ul className="nav-menu">
        {menuBar.map((nav, idx) => {
          return (
            <li className="nav-item" key={`headerNav-${idx}`}>
              <Link to={navURL[idx]}>{nav}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default HeaderNav;
