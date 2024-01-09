import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../Button/GoBackButton";
import ToDoList from "./advanced/ToDoList";
import WithOutRedux from "./tutorial/WithOutRedux";
import WithRedux from "./tutorial/WithRedux";
import WithOutReactRedux from "./tutorial2/WithOutReactRedux";
import WithReactRedux from "./tutorial2/WithReactRedux";

/*
  date: 24.01.09
  component: 
  topic: 생활코딩 react-redux 2022개정판 강의를 바탕으로 구현한 코드입니다.
  url: https://www.youtube.com/watch?v=yjuwpf7VH74

  date: 23.12.08
  component: <WithOutRedux/>, <WithRedux/>, <ToDoList/>
  topic: 생활코딩 redux 강의에 나와있는 코드를 react 기반으로 재구현한 코드입니다.
  url: https://www.youtube.com/watch?v=8EhmwDKSeJQ
  comment: 해당 강의는 4년전 강의로, 오래된 코드를 그대로 사용했습니다.
*/
const WITHOUT_REDUX = 1;
const WITH_REDUX = 2;
const WITHOUT_REACT_REDUX = 3;
const WITH_REACT_REDUX = 4;

function LifeCoding() {
  const [mode, setMode] = useState(WITHOUT_REDUX);
  const { subtopic2 } = useParams();
  const [component, setComponent] = useState();
  const [buttonContainer, setButtonContainer] = useState();

  useEffect(() => {
    if (subtopic2 === "tutorial1") {
      if (mode === WITHOUT_REDUX) {
        setComponent(<WithOutRedux />);
      } else {
        setComponent(<WithRedux />);
      }
    } else if (subtopic2 === "advanced1") {
      setComponent(<ToDoList />);
    } else if (subtopic2 === "tutorial2") {
      if (mode === WITHOUT_REACT_REDUX) {
        setComponent(<WithOutReactRedux />);
      } else {
        setComponent(<WithReactRedux />);
      }
    } else {
      setComponent(<div>No Page</div>);
    }
  }, [subtopic2, mode]);

  useEffect(() => {
    if (subtopic2 === "tutorial1") {
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
    } else if (subtopic2 === "tutorial2") {
      if (mode === WITHOUT_REACT_REDUX) {
        setButtonContainer(
          <div className="btn-container">
            <h4>React-Redux Not Applied</h4>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(WITH_REACT_REDUX)}
            >
              with react-redux
            </button>
          </div>
        );
      } else {
        setButtonContainer(
          <div className="btn-container">
            {" "}
            <h4>React-Redux Applied</h4>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(WITHOUT_REACT_REDUX)}
            >
              without react-redux
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
