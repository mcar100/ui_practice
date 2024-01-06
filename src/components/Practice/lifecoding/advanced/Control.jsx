import { Link } from "react-router-dom";

function Control() {
  return (
    <ul>
      <li>
        <Link>create</Link>
      </li>
      <li>
        <input type={"button"} value={"delete"}></input>
      </li>
    </ul>
  );
}

export default Control;
