import { useParams } from "react-router-dom";
import LifeCodingAdvanced from "../components/Practice/lifecoding/advanced/LifeCodingAdvanced";
import LifeCodingTutorial from "../components/Practice/lifecoding/tutorial/LifeCodingTutorial";

function PracticePage() {
  const { subtopic, subtopic2 } = useParams();
  let content;

  if (subtopic === "lifecoding") {
    if (subtopic2 === "tutorial") {
      content = <LifeCodingTutorial />;
    } else if (subtopic2 === "advanced") {
      content = <LifeCodingAdvanced />;
    } else {
      content = <div>No Page</div>;
    }
  } else {
    content = <div>No Page</div>;
  }

  return <div className="practice-container">{content}</div>;
}

export default PracticePage;
