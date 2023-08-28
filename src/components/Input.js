import React, { useEffect, useRef } from 'react';


const Input = () => {
    const inputRef = useRef();
    const divRef = useRef();

    useEffect (() => {
        console.log(inputRef.current);
        // if(inputRef.current) inputRef.current.style.backgroundColor = "red"
        divRef.current.focus();
    },[]);

    return (

        <div className='input-div' ref={inputRef}> 
         <input ref={divRef} 
        type="text"
        placeholder="autofocur "/></div>
    );
};

export default Input;