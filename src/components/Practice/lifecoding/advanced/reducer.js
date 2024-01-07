function reducer(state, action) {
  if (state === undefined) {
    return {
      mode: "read",
      selected_id: 1,
      contents: [
        { id: 1, title: "HTML", desc: "HTML is .." },
        { id: 2, title: "CSS", desc: "CSS is .." },
      ],
      maxId: 2,
    };
  }

  let newState = {};
  if (action.type === "SELECT") {
    newState = { ...state, mode: "read", selected_id: action.id };
  } else if (action.type === "CREATE") {
    newState = { ...state, mode: "create" };
  } else if (action.type === "CREATE_SUBMIT") {
    const newId = state.maxId + 1;
    const newContents = [...state.contents, { id: newId, ...action.content }];
    newState = {
      ...state,
      mode: "read",
      selected_id: newId,
      contents: newContents,
      maxId: newId,
    };
  } else if (action.type === "MODIFY") {
    newState = { ...state, mode: "modify" };
  } else if (action.type === "MODIFY_SUBMIT") {
    const newId = state.maxId + 1;
    const newContents = state.contents.filter(
      (content) => content.id !== state.selected_id
    );
    newContents.push({ id: newId, ...action.content });
    newState = {
      ...state,
      mode: "read",
      selected_id: newId,
      contents: newContents,
      maxId: newId,
    };
  } else if (action.type === "CANCEL") {
    newState = { ...state, mode: "read" };
  } else if (action.type === "DELETE") {
    const newContents = state.contents.filter(
      (content) => content.id !== state.selected_id
    );
    newState = {
      ...state,
      mode: "read",
      selected_id: newContents.length > 0 ? newContents[0].id : null,
      contents: newContents,
    };
  }
  console.log(newState);
  return newState;
}

export default reducer;
