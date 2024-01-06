import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "./storeContext";

function NavList() {
  const store = useStore();
  const state = store.getState();
  const [navList, setNavList] = useState(state.contents);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    store.dispatch({ type: "SELECT", id: id });
  };

  const handleNavListChange = () => {
    const newState = store.getState();
    setNavList([...newState.contents]);
  };

  store.subscribe(handleNavListChange);

  return (
    <nav className="nav-container">
      <ol>
        {navList.map((content) => (
          <li key={`content-${content.id}`}>
            <Link
              to={`/${content.id}`}
              onClick={(e) => handleNavClick(e, content.id)}
            >
              {content.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default NavList;
