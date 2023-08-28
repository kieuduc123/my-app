import React, { useEffect, useState } from 'react';


export default function useDebounce(initializeValue ='',delay='1000'){
    const [debounce,setDebounce] = useState('initializeValue');
    useEffect(() =>{
        const timer = setTimeout(() =>{
            setDebounce('')

        },delay)
        return() =>{
            clearTimeout(timer);
        }
    },[delay,initializeValue]);
    return debounce;
}