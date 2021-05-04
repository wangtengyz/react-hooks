import React, { useEffect, useState, useMemo, useCallback } from 'react';

const InputDemo2 = (props) => {

    console.log('renderInput2');

    const [state, setState] = useState(null);

    const hanldeChangeUCB = useCallback(e => {
        setState(e.target.value)
    }, [])

    // 渲染input2
    const renderInput2 = useMemo(() => {
        // console.log('renderInput2-useMemo');
        return (
            <React.Fragment>
                <h5>最终阶段-{state || '暂无值'}</h5>
                <input type="text" onChange={hanldeChangeUCB} />
            </React.Fragment>
        )
    }, [hanldeChangeUCB, state])

    useEffect(() => {
        //do something
    }, [])

    return (
        <div>
            {renderInput2}
        </div>
    )
}

export default React.memo(InputDemo2)
