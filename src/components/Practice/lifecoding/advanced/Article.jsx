import { useState } from "react";
import { useStore } from "./storeContext";

function Article() {
  const store = useStore();
  const [content, setContent] = useState();

  const handleContentChanged = () => {
    const newState = store.getState();
    const newContent = newState.contents.find(
      (content) => content.id === newState.selected_id
    );
    setContent({ title: newContent.title, desc: newContent.desc });
  };

  // state의 selected_id가 바뀔때마다 실행
  store.subscribe(handleContentChanged);

  return (
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
  );
}

export default Article;
