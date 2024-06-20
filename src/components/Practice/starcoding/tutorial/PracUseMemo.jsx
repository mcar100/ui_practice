import React, { useState, memo, useMemo } from "react";

// React.memo + useMemo

function PracUseMemo() {
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

  const name = useMemo(() => {
    return {
      lastName: "홍",
      firstName: "길동",
    };
  }, []);

  return (
    <div style={{ border: "2px solid navy", padding: 10 }}>
      <h1>👨‍👩‍👧 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />
    </div>
  );
}

const Child = memo(({ name }) => {
  console.log("👶 Child component rendered too!");
  return (
    <div style={{ border: "2px solid powderblue", padding: 10 }}>
      <h1>👶 자녀</h1>
      <p>last name: {name.lastName}</p>
      <p>first name: {name.firstName}</p>
    </div>
  );
});

export default PracUseMemo;
