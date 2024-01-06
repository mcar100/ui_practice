import { Link } from "react-router-dom";

function NavList() {
  return (
    <nav className="nav-container">
      <ol>
        <li>
          <Link>HTML</Link>
        </li>
        <li>
          <Link>CSS</Link>
        </li>
      </ol>
    </nav>
  );
}

export default NavList;
