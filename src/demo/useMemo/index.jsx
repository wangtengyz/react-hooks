import React, { useState, useMemo } from 'react';
import Item from './item'

const UseMemoDemo = (props) => {

  const [count, setCount] = useState(0);
  const [foo] = useState("foo");

  const main = (
    <div>
      <Item key={1} x={1} foo={foo} />
      <Item key={2} x={2} foo={foo} />
      <Item key={3} x={3} foo={foo} />
      <Item key={4} x={4} foo={foo} />
      <Item key={5} x={5} foo={foo} />
    </div>
  );

  const mainUseMemo = useMemo(() => (
    <div>
        <Item key={1} x={1} foo={foo} />
        <Item key={2} x={2} foo={foo} />
        <Item key={3} x={3} foo={foo} />
        <Item key={4} x={4} foo={foo} />
        <Item key={5} x={5} foo={foo} />
    </div>
), [foo]);

  return (
    <div>
      <p>{count}</p>
      <div>普通main</div>
      <button onClick={() => setCount(count + 1)}>setCount</button>
      {main}
      <p>useMemo-main</p>
      {mainUseMemo}
    </div>
  );
}

export default UseMemoDemo
