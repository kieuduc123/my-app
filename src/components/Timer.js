import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [message, setMessage] = useState("duc");
    useEffect (() =>{
    const timer =  setInterval(() =>{
        console.log(message);
       },2000);
       return () =>{
        clearInterval(timer);
       };
    },[message]);
    return (
        <div>
            <input type='text' value={message}
             onChange={(e) => setMessage(e.target.value)}>
            </input>
        </div>
    );
};

// const timerRef = useRef(null);
// const [count , setCount] = useState(0);

// const hanldStart =() =>{
//   if(timerRef.current)  return;
//   timerRef.current =  setInterval(() =>{
//     setCount((count) => count + 1);
//    },1000);
// };
// const hanldStop = () =>{
//   clearInterval(timerRef.current);
//   timerRef.current  = null;
// };
// useEffect (() =>{
//   return () => 
//   clearInterval(timerRef.current);

// },[]);
// return (
//   <div>
//     <h3>timer{count}s</h3>
//     <button onClick={hanldStart}>Start</button>
//     <button onClick={hanldStop}>Stop</button>
//   </div>
 
// );

export default Timer;