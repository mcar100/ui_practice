import { useParams } from "react-router-dom";
import LifeCodingPractice from "../components/Practice/LifeCodingPractice";

function PracticePage() {
  const subTopic = useParams().subtopic;
  return (
    <div className="practice-container">
      {subTopic ? <LifeCodingPractice /> : <div>This is Pratice Page</div>}
    </div>
  );
}

export default PracticePage;
