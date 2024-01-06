import { useState } from "react";
import { useStore } from "./storeContext";

function Article() {
  const store = useStore();
  const state = store.getState();
  const [mode, setMode] = useState(state.mode);
  const [content, setContent] = useState(state.contents[0]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  // change mode
  const handleModeChange = () => {
    const newState = store.getState();
    setMode(newState.mode);
  };

  // read mode
  const handleContentChange = () => {
    const newState = store.getState();
    const newContent = newState.contents.find(
      (content) => content.id === newState.selected_id
    );
    setContent({ title: newContent.title, desc: newContent.desc });
  };

  // create mode
  const handleFormSubmit = (e) => {
    e.preventDefault();
    store.dispatch({
      type: "SUBMIT",
      content: { title: title, desc: description },
    });
  };

  const handleFormCancle = () => {
    store.dispatch({ type: "CANCEL" });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };

  // subscribe
  // state의 selected_id가 바뀔때마다 실행
  store.subscribe(() => {
    handleContentChange();
    handleModeChange();
  });

  return (
    <div>
      {" "}
      {mode === "read" ? (
        <article>
          {content ? (
            <div>
              {" "}
              <h2>{content.title}</h2>
              {content.desc}{" "}
            </div>
          ) : (
            <div> select subject</div>
          )}
        </article>
      ) : (
        <article>
          <form onSubmit={handleFormSubmit}>
            <p>
              <input
                type={"text"}
                name="title"
                placeholder="title"
                onChange={handleTitleChange}
              />
            </p>
            <p>
              <textarea
                name="desc"
                placeholder="description"
                onChange={handleDescChange}
              ></textarea>
            </p>
            <p>
              <input type={"submit"} />
              <input
                type={"button"}
                value={"취소"}
                onClick={handleFormCancle}
              />
            </p>
          </form>
        </article>
      )}
    </div>
  );
}

export default Article;
