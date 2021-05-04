import React, { useEffect, useState } from 'react';

const UseStateDemo = (props) => {

  const [state, setState] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setState(state + 1);
    }, 3000);
  };

  const handleClick2 = () => {
    setTimeout(() => {
      setState(state => state + 1);
    }, 3000);
  };


  useEffect(() => {
    //do something
  }, [])

  return (
    <div>
      <h3>useStateDemo</h3>
      <p>
      点击 "Delay setState"【定时器：三秒后触发setState(state + 1)】，文本依然为 0，随后在 3 秒内连续点击 "setState" 两次，请问数据会如何变化？
      </p>
      <div>
        <p>{state}</p>
        <button onClick={() => setState(state + 1)}>
          setState
        </button>
        <button onClick={handleClick}>
          Delay setState
        </button>
        <button onClick={handleClick2}>
          Delay setState 2
        </button>
      </div>
    </div>
  )
}

export default UseStateDemo
