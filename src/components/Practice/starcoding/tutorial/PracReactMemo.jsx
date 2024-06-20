import React, { useState, memo } from "react";

function PracReactMemo() {
  return (
    <div className="contents-container">
      <Parent />
    </div>
  );
}

function Parent() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("👨‍👩‍👧 Parent component rendered");

  return (
    <div style={{ border: "2px solid navy", padding: 10 }}>
      <h1>👨‍👩‍👧 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자식 나이 증가</button>
      <Child name={"홍길동"} age={childAge} />
    </div>
  );
}

const Child = memo(({ name = "홍길동", age = 5 }) => {
  console.log("👶 Child component rendered too!");
  return (
    <div style={{ border: "2px solid powderblue", padding: 10 }}>
      <h1>👶 자녀</h1>
      <p>name: {name}</p>
      <p>age: {age}살</p>
    </div>
  );
});

export default PracReactMemo;
