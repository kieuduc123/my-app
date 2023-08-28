import React from 'react';
import useClickOutSile from './hooks/useClickOutSile';

const Dropdown = () => {
    const  { showDrop,
        setShowDrop,
        dropRef,
    } = useClickOutSile();

    return (
        <div style={{margin: "auto", width: "300px", position:"relative"}} ref={dropRef}>
           <div  onClick={() => setShowDrop(!showDrop)}
            style={{border : "1px solid", width : "200px"}}>
                 select
         </div> 

         {showDrop && (
          <div 
            style={{border : "1px solid",width : "200px"}}>
                <div> JavaScript</div>
                <div> JavaScript</div>
                <div> JavaScript</div>
            </div>  
           
         )} 
            
        </div>
    )
};

export default Dropdown;