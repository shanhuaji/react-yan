import React, { useReducer, useEffect ,useState} from 'react';
interface Obj {
  [propName: string]: number;
}
export default function Staff() {
 /*  let [num,setNum] = useState(12)
  const [count, dispath] = useReducer((state,action)=> {
    console.log('state',state);
    console.log('action',action);
    if(action === 'add'){
        return state + 1;
    }
    return state;
}, num); */
  useEffect(() => {
    /*   setCount(count => {
      return count + 1;
    }); */
  }, []);
  let obj: Obj = {
    a: 1,
    b: 2,
  };
  return (
    <div>
      员工列表
      {/* <p>{count}</p> */}
    </div>
  );
}
