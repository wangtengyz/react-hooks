import React, { useEffect, useState, useRef } from 'react';

const UseRefDemo = (props) => {

  // 上一个例子代码
  const [count, setCount] = useState(1);
  // console.log('UseRefDemo, count =>', count);
  const currentCount = useRef(count);
  currentCount.current = count;
  // console.log('currentCount.current =>', currentCount.current);
  const handleDelay = () => {
    setTimeout(() => {
      setCount(currentCount.current + 1);
    }, 3000);
  };

  // 场景代码
  const [state, setState] = useState(1);
  // console.log('state =>', state);
  const prevStateRef = useRef(1);
  const prevState = prevStateRef.current;
  // console.log('prevState =>', prevState);

  const handleClick = () => {
    setState(prevState + state);
    prevStateRef.current = state;
  };

  useEffect(() => {
    //do something
  }, [])

  return (
    <div>
      <h3>UseRefDemo</h3>
      <p>上一个例子：不想在setState传入函数实现异步更新</p>

      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
          setCount
        </button>
        <button onClick={handleDelay}>
          Delay setCount
        </button>
      </div>
      <p>场景：state 初始值为 1，点击按钮后累加到 2，随后点击按钮，总是用当前 state 的值和前一个 state 的值进行累加，得到新的 state 的值，如何实现？</p>
      <div>
        <p>{state}</p>
        <button onClick={handleClick}>setState</button>
      </div>
    </div>
  )
}

export default UseRefDemo
