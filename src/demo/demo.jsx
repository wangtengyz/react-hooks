import React , { useEffect, useState, useMemo, useCallback } from 'react';

const Demo = (props) => {

   const [state, setState] = useState(null);

   useEffect(() => {
     //do something
   }, [])

   return (
     <div>
        <h3>demo1</h3>
     </div>
   )
}

export default Demo
