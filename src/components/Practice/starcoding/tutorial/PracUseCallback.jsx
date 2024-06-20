import React, { useState, memo, useCallback } from "react";

// React.memo + useCallback

function PracUseCallback() {
  return (
    <div className="contents-container">
      <Parent />
    </div>
  );
}

function Parent() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("👨‍👩‍👧 Parent component rendered");

  const tellMe = useCallback(() => {
    console.log("길동아 사랑해 ❤❤");
  }, []);

  return (
    <div style={{ border: "2px solid navy", padding: 10 }}>
      <h1>👨‍👩‍👧 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} tellMe={tellMe} />
    </div>
  );
}

const Child = memo(({ name, tellMe }) => {
  console.log("👶 Child component rendered too!");
  return (
    <div style={{ border: "2px solid powderblue", padding: 10 }}>
      <h1>👶 자녀</h1>
      <p>name: {name}</p>
      <button onClick={tellMe}>엄마 나 사랑해?</button>
    </div>
  );
});

export default PracUseCallback;
