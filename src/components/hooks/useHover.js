import {useRef, useState}  from "react";
export default  function useHover(){
    const [hover , setHover] = useState(false);
    //de biet su dung nao trong dom 
    const nodeRef = useRef(null);

    useRef(() =>{
        function hanldMouseOver(){
            setHover(true);
        }
        const dom  = nodeRef.current;
        function hanldMouseOut(){
            setHover(false);
        }

        if(dom) {
            dom.addEventListener("mouseover" , hanldMouseOver);
            dom.addEventListener("mouseover" , hanldMouseOut);
        }
        return() => {
            dom.removeEventListener("mouseover" , hanldMouseOver);
            dom.removeEventListener("mouseover" , hanldMouseOut);
        }
        
    },[]);
    return {
        hover,
        nodeRef,
    };

}