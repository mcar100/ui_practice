import GoBackButton from "../../../Button/GoBackButton";
import Article from "./Article";
import Control from "./Control";
import NavList from "./NavList";
import Subject from "./Subject";

function ToDoList() {
  return (
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
  );
}

export default ToDoList;
