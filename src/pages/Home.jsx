import { Link } from "react-router-dom";
import { PRACTICE_LIST, PRACTICE_URL } from "../utils/constants";

function HomePage() {
  const practiceList = PRACTICE_LIST;
  const practiceUrl = PRACTICE_URL;
  return (
    <div className="project-list-container">
      <h2>Project-List</h2>
      <ul className="project-list">
        {practiceList.map((practice, idx) => (
          <li key={`practice-${idx}`}>
            <span>{practice.title}</span>
            <Link to={`practice/${practiceUrl[idx]}`}>Go</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
