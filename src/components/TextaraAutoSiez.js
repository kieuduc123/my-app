import React, { useEffect, useRef, useState } from 'react';




const TextaraAutoSiez = () => {
    const [text,setText] = useState("demo");
    const [parentHeight, setParentHeight] = useState("auto")
    const textareRef = useRef(null);

    const handleChange  = (e) =>{
        setText(e.target.value);
        setParentHeight("auto");
        

    };
    useEffect(() =>{
        setParentHeight(`${textareRef ?.current?.scrollHeight}px`)
    },[text]);

    return (
        <div className="">
            <textarea  className ="w-full"
            value={text}
            style={{
                height: parentHeight,
            }}
            onChange={handleChange}
            ref={textareRef}  placeholder='pleace enter your content'></textarea>
            
        </div>
    );
};

export default TextaraAutoSiez;