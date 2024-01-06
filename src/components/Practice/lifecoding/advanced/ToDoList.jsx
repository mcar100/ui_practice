import { legacy_createStore as createStore } from "redux";
import { StoreProvider } from "./storeContext";
import GoBackButton from "../../../Button/GoBackButton";
import Article from "./Article";
import Control from "./Control";
import NavList from "./NavList";
import Subject from "./Subject";

function ToDoList() {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  function reducer(state, action) {
    if (state === undefined) {
      return {
        mode: "read",
        selected_id: 1,
        contents: [
          { id: 1, title: "HTML", desc: "HTML is .." },
          { id: 2, title: "CSS", desc: "CSS is .." },
        ],
      };
    }

    let newState = {};
    if (action.type === "SELECT") {
      newState = { ...state, selected_id: action.id };
    } else if (action.type === "CREATE") {
      newState = { ...state, mode: "create" };
    } else if (action.type === "SUBMIT") {
      const newContents = state.contents;
      newContents.push({ id: state.contents.length + 1, ...action.content });
      newState = { ...state, mode: "read", contents: newContents };
    } else if (action.type === "CANCEL") {
      newState = { ...state, mode: "read" };
    }
    console.log(newState);
    return newState;
  }
  return (
    <StoreProvider store={store}>
      {" "}
      <div className="contents-container">
        <GoBackButton />
        <div className="btn-container"></div>
        <div className="todolist-container">
          <Subject />
          <NavList />
          <Control />
          <Article />
        </div>
      </div>
    </StoreProvider>
  );
}

export default ToDoList;
