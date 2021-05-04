import React, { useEffect, useState, useMemo, useCallback } from 'react';
import InputDemo2 from './coms/inputDemo2'

const Demo1 = (props) => {

  console.log('Demo1');

  const [state, setState] = useState(null);

  const [state1, setState1] = useState(null);

  const handleChange = useCallback(e => {
    setState1(e.target.value)
  }, [])

  useEffect(() => {
    //do something
  }, [])

  // 渲染标题
  const renderTitle = useMemo(() => (
    <h3>whyNeedCom - 渲染可控</h3>
  ), [])

  // 渲染input - 函数式组件
  const renderInput = () => {
    console.log('renderInput');
    return (
      <React.Fragment>
        <h5>当前阶段-{state || '暂无值'}</h5>
        <input type="text" onChange={e => setState(e.target.value)} />
      </React.Fragment>
    )
  }

  // 渲染input1 - useMemo包装组件
  const renderInput1 = useMemo(() => {
    console.log('renderInput1');
    return (
      <React.Fragment>
        <h5>近期阶段-{state1 || '暂无值'}</h5>
        <input type="text" onChange={handleChange} />
      </React.Fragment>
    )
  }, [state1, handleChange])

  return (
    <React.Fragment>
      {renderTitle}
      {renderInput()}
      {renderInput1}
      <InputDemo2 />
    </React.Fragment>
  )
}

export default Demo1
