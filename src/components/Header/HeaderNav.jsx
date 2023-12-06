import { Link } from "react-router-dom";
import { MENU_BAR, PAGE_URL } from "../../utils/constants";

function HeaderNav() {
  const menuBar = MENU_BAR;
  const pageURL = PAGE_URL;

  return (
    <nav className="header-navbar">
      <ul className="nav-menu">
        {menuBar.map((nav, idx) => {
          return (
            <li className="nav-item" key={`headerNav-${idx}`}>
              <Link to={pageURL[idx]}>{nav}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default HeaderNav;
