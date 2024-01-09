import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "./storeContext";

function NavList() {
  const store = useStore();
  const state = store.getState();
  const [isDisabled, setIsDisabled] = useState(
    state.mode === "read" ? false : true
  );
  const [navList, setNavList] = useState(state.contents);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (!isDisabled) {
      store.dispatch({ type: "SELECT", id: id });
    }
  };

  const handleNavListChange = () => {
    const newState = store.getState();
    setNavList([...newState.contents]);
  };

  // change mode
  const handleModeChange = () => {
    const newState = store.getState();
    setIsDisabled(newState.mode === "read" ? false : true);
  };

  store.subscribe(() => {
    handleNavListChange();
    handleModeChange();
  });

  return (
    <nav className="nav-container">
      <ol>
        {navList.map((content) => (
          <li key={`content-${content.id}`}>
            <Link
              className={isDisabled ? "disabled" : ""}
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
