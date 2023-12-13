import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LifeCoding from "../components/Practice/lifecoding/LifeCoding";

function PracticePage() {
  const { subtopic } = useParams();
  const [component, setComponent] = useState();

  useEffect(() => {
    if (subtopic === "lifecoding") {
      setComponent(<LifeCoding />);
    } else {
      setComponent(<div>No Page</div>);
    }
  }, [subtopic]);

  return <div className="practice-container">{component}</div>;
}

export default PracticePage;
