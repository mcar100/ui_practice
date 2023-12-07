import { useParams } from "react-router-dom";
import LifeCodingPractice from "../components/Practice/LifeCodingPractice";

function PracticePage() {
  const { subtopic } = useParams();

  return (
    <div className="practice-container">
      {subtopic === "lifecoding" ? <LifeCodingPractice /> : <div>No Page</div>}
    </div>
  );
}

export default PracticePage;
