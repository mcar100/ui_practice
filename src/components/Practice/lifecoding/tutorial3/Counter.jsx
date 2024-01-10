import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "./counterSlice";

function Counter() {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="tutorial3-container">
      <h1>{count}</h1>
      <div>
        <input
          type={"text"}
          value={step}
          onChange={(e) => {
            setStep(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(increase(Number(step)));
            // dispatch({ type: "counterSlice/increase", payload: 2 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrease(Number(step)));
            // dispatch({ type: "counterSlice/decrease", payload: 2 });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(reset());
            setStep(0);
          }}
        >
          0
        </button>
      </div>
    </div>
  );
}
export default Counter;
