import { Link } from "react-router-dom";
import { useStore } from "./storeContext";

function Control() {
  const store = useStore();
  const handleCreateClick = (e) => {
    e.preventDefault();
    store.dispatch({ type: "CREATE" });
  };

  return (
    <ul className="control-container">
      <li>
        <Link to="/create" onClick={handleCreateClick}>
          create
        </Link>
      </li>
      <li>
        <input type={"button"} value={"delete"}></input>
      </li>
    </ul>
  );
}

export default Control;
