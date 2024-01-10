import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";

function WithReduxToolkit() {
  return (
    <Provider store={store}>
      <div className="contents-container">
        <h1>Redux-Toolkit Applied</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default WithReduxToolkit;
