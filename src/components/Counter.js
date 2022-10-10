import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;
// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     console.log(`before setState: ${count}`);

//     setCount(count + 1);

//     console.log(`after setState: ${count}`);
//   }

//   return <div onClick={increment}>{count}</div>;
// }

function Counter() {
  const [count, setCount] = useState(0);

  // function increment() {
  //   console.log(`before setState: ${count}`);
  //   setCount(count + 1);
  //   console.log(`after setState once: ${count}`);
  //   setCount(count + 1);
  //   console.log(`after setState twice: ${count}`);
  // }
  function increment() {
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }
  return <div onClick={increment}>{count}</div>;
}
export default Counter;
