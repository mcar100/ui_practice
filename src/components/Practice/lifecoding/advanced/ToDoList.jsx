import { legacy_createStore as createStore } from "redux";
import { StoreProvider } from "./storeContext";
import reducer from "./reducer";
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

  return (
    <StoreProvider store={store}>
      {" "}
      <div className="contents-container">
        <GoBackButton />
        <div className="btn-container"></div>
        <div className="todolist-container">
          <Subject />
          <Control />
          <NavList />
          <Article />
        </div>
      </div>
    </StoreProvider>
  );
}

export default ToDoList;
