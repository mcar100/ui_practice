import { useState } from "react";
import GoBack from "../../../Button/GoBackButton";
import WithOutRedux from "./WithOutRedux";
import WithRedux from "./WithRedux";

/*
  date: 23.12.08
  url: https://www.youtube.com/watch?v=8EhmwDKSeJQ
  topic: 생활코딩 redux 강의에 나와있는 코드를 react 기반으로 재구현한 코드입니다.
  comment: 해당 강의는 4년전 강의로, 오래된 코드를 그대로 사용했습니다.
*/
const WITH_REDUX = 1;
const WITHOUT_REDUX = 2;

function LifeCodingTutorial() {
  const [mode, setMode] = useState(WITH_REDUX);
  const handleModeClick = (n) => {
    setMode(n);
  };
  return (
    <div className="page-container">
      <GoBack />
      {mode === 1 ? (
        <div className="btn-container">
          <h4>Redux Not Applied</h4>
          <button
            className="btn-mode-change"
            onClick={() => handleModeClick(WITHOUT_REDUX)}
          >
            with redux
          </button>
        </div>
      ) : (
        <div className="btn-container">
          {" "}
          <h4>Redux Applied</h4>
          <button
            className="btn-mode-change"
            onClick={() => handleModeClick(WITH_REDUX)}
          >
            without redux
          </button>
        </div>
      )}
      {mode === 1 ? (
        // 리덕스 x: 매우 비효율적인 코드
        <WithOutRedux />
      ) : (
        <WithRedux />
      )}
    </div>
  );
}

export default LifeCodingTutorial;
