import { useStore } from "./storeContext";

function Control() {
  const store = useStore();
  const handleCreateClick = () => {
    store.dispatch({ type: "CREATE" });
  };
  const handleDeleteClick = () => {
    store.dispatch({ type: "DELETE" });
  };
  const handleModifyClick = () => {
    const state = store.getState();
    if (state.contents.length > 0) {
      store.dispatch({ type: "MODIFY" });
    }
  };

  return (
    <ul className="control-container">
      <li>
        <input
          type={"button"}
          value={"작성"}
          onClick={handleCreateClick}
        ></input>
      </li>
      <li>
        <input
          type={"button"}
          value={"수정"}
          onClick={handleModifyClick}
        ></input>
      </li>
      <li>
        <input
          type={"button"}
          value={"삭제"}
          onClick={handleDeleteClick}
        ></input>
      </li>
    </ul>
  );
}

export default Control;
