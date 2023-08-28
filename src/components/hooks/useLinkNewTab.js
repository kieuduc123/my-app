import {useRef,useEffect} from 'react';

export default function useLinkNewTab () {
    const contentRef = useRef(null);

    useEffect(() =>{
        if(contentRef) {
            const links = contentRef.current.querySelectorAll("a");
            links.lenght > 0  && links.forEach((item) => item.setAttribute("target", "_blank"));
        }
    },[]);
    return {
        contentRef,
    };
}