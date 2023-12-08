import { useState } from "react";
import WithOutRedux from "./tutorial/WithOutRedux";
import WithRedux from "./tutorial/WithRedux";

/*
  date: 23.12.08
  url: https://www.youtube.com/watch?v=8EhmwDKSeJQ
  topic: 생활코딩 redux 강의에 나와있는 코드를 react 기반으로 재구현한 코드입니다.
  comment: 해당 강의는 4년전 강의로, 오래된 코드를 그대로 사용했습니다.
*/
function LifeCodingPractice() {
  const [mode, setMode] = useState(1);
  const handleModeClick = (n) => {
    setMode(n);
  };
  return (
    <div className="page-container">
      {mode === 1 ? (
        <div className="btn-container">
          <h4>Redux Not Applied</h4>
          <button
            className="btn-mode-change"
            onClick={() => handleModeClick(2)}
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
            onClick={() => handleModeClick(1)}
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

export default LifeCodingPractice;
