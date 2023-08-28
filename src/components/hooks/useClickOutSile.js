import React, { useEffect, useRef, useState } from 'react';


export default function useClickOutSile (dom = 'button') {
    const [showDrop, setShowDrop] = useState(false);
    const dropRef = useRef(null);

    useEffect (() =>{
        function handleDrop (e){
            if(dropRef.current && !dropRef.current.contains(e.target) 
            && !e.target.matches(dom)
        ){
                setShowDrop(false);
            }   
        }
        document.addEventListener("click",handleDrop);
        return () => {
            document.removeEventListener("click", handleDrop);
        };
    },[])
    return{
        showDrop,
        setShowDrop,
        dropRef,
    };
} 