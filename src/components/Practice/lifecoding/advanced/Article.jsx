import { useState } from "react";
import { useStore } from "./storeContext";

function Article() {
  const store = useStore();
  const state = store.getState();
  const [mode, setMode] = useState(state.mode);
  const [content, setContent] = useState(state.contents[0]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // change mode
  const handleModeChange = () => {
    const newState = store.getState();

    if (title !== "" || description !== "") {
      setTitle("");
      setDescription("");
    }

    if (newState.mode === "modify") {
      const oldContent = newState.contents.find(
        (content) => content.id === newState.selected_id
      );
      setTitle(oldContent.title);
      setDescription(oldContent.desc);
    }
    setMode(newState.mode);
  };

  // read mode
  const handleContentChange = () => {
    const newState = store.getState();
    if (newState.contents.length > 0) {
      const newContent = newState.contents.find(
        (content) => content.id === newState.selected_id
      );
      setContent({ title: newContent.title, desc: newContent.desc });
    } else {
      setContent();
    }
  };

  // create mode
  const handleFormSubmit = (e) => {
    e.preventDefault();
    store.dispatch({
      type: "CREATE_SUBMIT",
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

  // modify mode
  const handleFormModify = (e) => {
    e.preventDefault();
    store.dispatch({
      type: "MODIFY_SUBMIT",
      content: { title: title, desc: description },
    });
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
            <div>no article</div>
          )}
        </article>
      ) : (
        <article>
          <form
            onSubmit={mode === "create" ? handleFormSubmit : handleFormModify}
          >
            <p>
              <input
                type={"text"}
                name="title"
                placeholder="title"
                onChange={handleTitleChange}
                value={title}
              />
            </p>
            <p>
              <textarea
                name="desc"
                placeholder="description"
                onChange={handleDescChange}
                value={description}
              ></textarea>
            </p>
            <p>
              <input
                type={"submit"}
                value={mode === "create" ? "제출" : "수정"}
              />
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
