import React, { useEffect, useState } from 'react';

const UseEffectDemo = (props) => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log('没有第二个参数的useEffect，每次render都会渲染'); 
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  useEffect(() => {
    console.log('只触发一次的useEffect');
  }, [])

  useEffect(() => {
    console.log('依赖项发生变化，才会触发useEffect');
  }, [count1])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You clicked {count1} times</p>
      <button onClick={() => setCount1(count1 + 1)}>
        Click1 me
      </button>
    </div>
  );
}

  export default UseEffectDemo
