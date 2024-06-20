import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GoBackButton from "../../Button/GoBackButton";
import PracReactMemo from "./tutorial/PracReactMemo";
import PracUseCallback from "./tutorial/PracUseCallback";
import PracUseMemo from "./tutorial/PracUseMemo";

/*
  date: 24.06.20
  component: <UseMemo1/>
  topic: 별코딩 useMemo, useCallback 연습 예제 코드입니다.
  url: https://www.youtube.com/watch?v=oqUgcxwrnSY
*/

const ONLY_REACT_MEMO = 1;
const REACT_MEMO_USE_MEMO = 2;
const REACT_MEMO_USE_CALLBACK = 3;

function StarCoding() {
  const { subtopic2 } = useParams();
  const [mode, setMode] = useState(ONLY_REACT_MEMO);
  const [component, setComponent] = useState();
  const [link, setLink] = useState();
  const [buttonContainer, setButtonContainer] = useState();

  useEffect(() => {
    if (subtopic2 === "tutorial1") {
      if (mode === ONLY_REACT_MEMO) {
        setComponent(<PracReactMemo />);
      } else if (mode === REACT_MEMO_USE_MEMO) {
        setComponent(<PracUseMemo />);
      } else if (mode === REACT_MEMO_USE_CALLBACK) {
        setComponent(<PracUseCallback />);
      }
      setLink("https://www.youtube.com/watch?v=oqUgcxwrnSY");
    }
  }, [subtopic2, mode]);

  useEffect(() => {
    if (subtopic2 === "tutorial1") {
      if (mode === ONLY_REACT_MEMO) {
        setButtonContainer(
          <div className="btn-container">
            <h4>Only React Memo</h4>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(REACT_MEMO_USE_MEMO)}
            >
              with useMemo
            </button>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(REACT_MEMO_USE_CALLBACK)}
            >
              with useCallback
            </button>
            <button className="btn-mode-change">
              <Link to={link}>강의 링크</Link>
            </button>
          </div>
        );
      } else if (mode === REACT_MEMO_USE_MEMO) {
        setButtonContainer(
          <div className="btn-container">
            {" "}
            <h4>useMemo Applied</h4>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(ONLY_REACT_MEMO)}
            >
              React Memo
            </button>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(REACT_MEMO_USE_CALLBACK)}
            >
              with useCallback
            </button>
            <button className="btn-mode-change">
              <Link to={link}>강의 링크</Link>
            </button>
          </div>
        );
      } else if (mode === REACT_MEMO_USE_CALLBACK) {
        setButtonContainer(
          <div className="btn-container">
            {" "}
            <h4>useMemo Applied</h4>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(ONLY_REACT_MEMO)}
            >
              React Memo
            </button>
            <button
              className="btn-mode-change"
              onClick={() => handleModeClick(REACT_MEMO_USE_MEMO)}
            >
              with useMemo
            </button>
            <button className="btn-mode-change">
              <Link to={link}>강의 링크</Link>
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
      <GoBackButton />
      {buttonContainer}
      {component}
    </div>
  );
}

export default StarCoding;
