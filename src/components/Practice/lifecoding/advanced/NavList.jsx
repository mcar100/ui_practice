import { Link } from "react-router-dom";
import { useStore } from "./storeContext";

function NavList() {
  const store = useStore();
  const state = store.getState();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const action = { type: "SELECT", id: id };
    store.dispatch(action);
  };

  return (
    <nav className="nav-container">
      <ol>
        {state.contents.map((content) => (
          <li key={`content-${content.id}`}>
            <Link
              onClick={(e) => handleNavClick(e, content.id)}
              to={content.id}
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
