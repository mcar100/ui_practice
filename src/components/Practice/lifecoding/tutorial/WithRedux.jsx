import { useState } from "react";
import { legacy_createStore as createStore } from "redux";
function WithRedux() {
  const store = createStore(
    reducer,
    // redux_devtools 사용
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  function reducer(state, action) {
    if (state === undefined) {
      return { color: "yellow" };
    }

    let newState;
    if (action.type === "CHANGE_COLOR") {
      newState = { ...state, color: action.payload.color };
    }
    return newState;
  }

  const state = store.getState();

  const [myStyle, setMyStyle] = useState({
    backgroundColor: state.color,
  });

  const handleStateChange = (color) => {
    store.dispatch({ type: "CHANGE_COLOR", payload: { color: color } });
  };

  store.subscribe(() => {
    const newState = store.getState();
    setMyStyle({ backgroundColor: newState.color });
  });

  return (
    <div className="contents-container">
      {" "}
      <div className="contents-container">
        <div id="red">
          <div className="lf-container" id="component_red" style={myStyle}>
            <h1>red</h1>
            <input
              type="button"
              value="fire"
              onClick={() => {
                handleStateChange("red");
              }}
            />
          </div>
        </div>
        <div id="green">
          <div className="lf-container" id="component_green" style={myStyle}>
            <h1>green</h1>
            <input
              type="button"
              value="fire"
              onClick={() => {
                handleStateChange("green");
              }}
            />
          </div>
        </div>
        <div id="blue">
          <div className="lf-container" id="component_blue" style={myStyle}>
            <h1>blue</h1>
            <input
              type="button"
              value="fire"
              onClick={() => {
                handleStateChange("blue");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithRedux;
