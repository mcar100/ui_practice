import { useState } from "react";

function WithOutReactRedux() {
  const [number, setNumber] = useState(1);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div className="contents-container">
      <div id="tutorial2-container">
        <h1>Root: {number}</h1>
        <div className="grid">
          <Left1 number={number} />
          <Right1 onIncrease={onIncrease} />
        </div>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      {" "}
      <h1>Left1</h1>
      <Left2 number={props.number} />
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      {" "}
      <h1>Left2</h1>
      <Left3 number={props.number} />
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      {" "}
      <h1>Left3: {props.number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      {" "}
      <h1>Right1</h1>
      <Right2 onIncrease={props.onIncrease} />
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      {" "}
      <h1>Right2</h1>
      <Right3 onIncrease={props.onIncrease} />
    </div>
  );
}

function Right3(props) {
  return (
    <div>
      {" "}
      <h1>Right3: {props.number}</h1>
      <input
        type={"button"}
        className="classic-button"
        value="+"
        onClick={() => {
          props.onIncrease();
        }}
      />
    </div>
  );
}
export default WithOutReactRedux;
