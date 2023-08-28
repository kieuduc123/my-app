import React, { useState } from 'react';

export default function useHandleChange(initialValue){

    const [value,setValue] = useState(initialValue);
    // const [message,setMessage] = useState("");
    // const [contry,setContry] = useState("");
    const handleInputChange = (e) =>{
        const type = e.target.type;
        console.log(e.target.value);
       setValue({
        ...value,
        [e.target.name] : type === "checkbox" ? e.target.checked : e.target.value,
    });
};
return {
    value,
    handleInputChange,
};

}