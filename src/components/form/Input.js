import React, { useState } from 'react';
import useHandleChange from '../hooks/useHandleChange';

const Input = () => {
      
    

    // const handleTextareChang= (e) =>{
        //  console.log(e.target.value);
        // setMessage(e.target.value);
    //  }
// 
    //  const handleSlectChang= (e) =>{
        // console.log(e.target.value);
    //    setContry(e.target.value);
    //  }

// 
const { value, handleInputChange,} = useHandleChange({
   fulname:"",
   email:"",
   hobby:false,
   
});
const [nameError,setNameError] = useState("");
const handleSubmitForm = (e) =>{
    e.preventDefault();
    if(value.fulname === ""){
        setNameError("Thieu noi dung");
    }
    else{
        setNameError("");
    }
};
    return (
        <div className="p-5" onSubmit={handleSubmitForm}>
            {/* {fullname} */}
            <input type='text' name="fulname"
            className="max-w-lg p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
            onChange={handleInputChange}
            ></input>

            <input type='text' name="email"
            className="max-w-lg p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            onChange={handleInputChange}
            ></input>

            <input type="checkbox" name="hobdy" 
            onChange={handleInputChange}
            ></input>
            <button  type="submit" className="pr-2  rounded-lg bg-yellow-400">submit</button>
             {/* {message} */}
            {/* <textarea */}
        {/* //     */}
            {/* //   type='text' name="message" */}
            {/* //    className="max-w-lg p-3 border-gray-300 rounded-lg" */}
            {/* //   placeholder="text" */}
            {/* //  onChange={handleTextareChang} */}
            {/* // > */}
            {/* </textarea> */}
            {/* {contry} */}
            {/* <select name='country' onChange={handleSlectChang}> */}
                {/* <option value="vietname">Vn</option> */}
                {/* <option value="japan">japan</option> */}
                {/* <option value="hanquoc">hq</option> */}
            {/* </select> */}
        </div>
    );
};

export default Input;