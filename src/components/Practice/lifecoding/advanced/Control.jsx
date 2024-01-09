import { useStore } from "./storeContext";
import { useState } from "react";

function Control() {
  const store = useStore();
  const state = store.getState();
  const [isDisabled, setIsDisabled] = useState(
    state.mode === "read" ? false : true
  );
  const handleCreateClick = () => {
    if (!isDisabled) {
      store.dispatch({ type: "CREATE" });
    }
  };
  const handleModifyClick = () => {
    const state = store.getState();

    if (!isDisabled && state.contents.length > 0) {
      store.dispatch({ type: "MODIFY" });
    }
  };
  const handleDeleteClick = () => {
    if (!isDisabled) {
      store.dispatch({ type: "DELETE" });
    }
  };

  // change mode
  const handleModeChange = () => {
    const newState = store.getState();
    setIsDisabled(newState.mode === "read" ? false : true);
  };

  store.subscribe(handleModeChange);

  return (
    <ul className="control-container">
      <li>
        <input
          type={"button"}
          disabled={isDisabled}
          className={isDisabled ? "disabled" : ""}
          name={"create"}
          value={"작성"}
          onClick={handleCreateClick}
        ></input>
      </li>
      <li>
        <input
          type={"button"}
          disabled={isDisabled}
          className={isDisabled ? "disabled" : ""}
          name={"modify"}
          value={"수정"}
          onClick={handleModifyClick}
        ></input>
      </li>
      <li>
        <input
          type={"button"}
          disabled={isDisabled}
          className={isDisabled ? "disabled" : ""}
          name={"delete"}
          value={"삭제"}
          onClick={handleDeleteClick}
        ></input>
      </li>
    </ul>
  );
}

export default Control;
