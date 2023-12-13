import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../Button/GoBackButton";
import ToDoList from "./advanced/ToDoList";
import WithOutRedux from "./tutorial/WithOutRedux";
import WithRedux from "./tutorial/WithRedux";

/*
  date: 23.12.08
  url: https://www.youtube.com/watch?v=8EhmwDKSeJQ
  topic: 생활코딩 redux 강의에 나와있는 코드를 react 기반으로 재구현한 코드입니다.
  comment: 해당 강의는 4년전 강의로, 오래된 코드를 그대로 사용했습니다.
*/
const WITHOUT_REDUX = 1;
const WITH_REDUX = 2;

function LifeCoding() {
  const [mode, setMode] = useState(WITHOUT_REDUX);
  const { subtopic2 } = useParams();
  const [component, setComponent] = useState();
  const [buttonContainer, setButtonContainer] = useState();

  useEffect(() => {
    if (subtopic2 === "tutorial") {
      if (mode === WITHOUT_REDUX) {
        setComponent(<WithOutRedux />);
      } else {
        setComponent(<WithRedux />);
      }
    } else if (subtopic2 === "advanced") {
      setComponent(<ToDoList />);
    } else {
      setComponent(<div>No Page</div>);
    }
  }, [subtopic2, mode]);

  useEffect(() => {
    if (subtopic2 === "tutorial") {
      if (mode === WITHOUT_REDUX) {
        setButtonContainer(
          <div className="btn-container">
            <h4>Redux Not Applied</h4>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(WITH_REDUX)}
            >
              with redux
            </button>
          </div>
        );
      } else {
        setButtonContainer(
          <div className="btn-container">
            {" "}
            <h4>Redux Applied</h4>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(WITHOUT_REDUX)}
            >
              without redux
            </button>
          </div>
        );
      }
    } else {
      setButtonContainer();
    }
  }, [mode]);

  const handleModeClick = (n) => {
    setMode(n);
  };
  return (
    <div className="page-container">
      <GoBack />
      {buttonContainer}
      {component}
    </div>
  );
}

export default LifeCoding;
