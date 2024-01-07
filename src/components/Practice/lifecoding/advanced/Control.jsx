import { useStore } from "./storeContext";

function Control() {
  const store = useStore();
  const handleCreateClick = () => {
    store.dispatch({ type: "CREATE" });
  };
  const handleModifyClick = () => {
    const state = store.getState();
    if (state.contents.length > 0) {
      store.dispatch({ type: "MODIFY" });
    }
  };
  const handleDeleteClick = () => {
    store.dispatch({ type: "DELETE" });
  };

  return (
    <ul className="control-container">
      <li>
        <input
          type={"button"}
          name={"create"}
          value={"작성"}
          onClick={handleCreateClick}
        ></input>
      </li>
      <li>
        <input
          type={"button"}
          name={"modify"}
          value={"수정"}
          onClick={handleModifyClick}
        ></input>
      </li>
      <li>
        <input
          type={"button"}
          name={"delete"}
          value={"삭제"}
          onClick={handleDeleteClick}
        ></input>
      </li>
    </ul>
  );
}

export default Control;
