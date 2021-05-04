import React, { useState, memo, useCallback } from 'react';

function Expensive({ onClick, name }) {
  console.log('高性能消耗Expensive渲染');
  return <div onClick={onClick}>{name}</div>
}

function ExpensiveC({ onClick, name }) {
  console.log('高性能消耗ExpensiveC渲染');
  return <div onClick={onClick}>{name}</div>
}

const MemoExpensive = memo(Expensive);

const MemoExpensiveC = memo(ExpensiveC);

function Cheap({ onClick, name }) {
  console.log('cheap渲染');
  return <div onClick={onClick}>{name}</div>
}

export default function Comp() {
  const [dataA, setDataA] = useState(0);
  const [dataB, setDataB] = useState(0);
  const [dataC, setDataC] = useState(0);

  const onClickA = () => {
    setDataA(o => o + 1);
  };

  const onClickB = () => {
    setDataB(o => o + 1);
  }

  // 使用 useCallBack包装
  const onClickC = useCallback(() => {
    setDataC(o => o + 1);
  }, []);

  return <div>
    <Cheap onClick={onClickA} name={`组件Cheap：${dataA}`} />
    <MemoExpensive onClick={onClickB} name={`高性能消耗组件Expensive：${dataB}`} />
    <MemoExpensiveC onClick={onClickC} name={`高性能消耗组件ExpensiveC：${dataC}`} />
  </div>
}
