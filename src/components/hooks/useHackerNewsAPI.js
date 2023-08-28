import axios from 'axios';
import {useEffect,useState,useRef} from 'react';



export default function useHackerNewsAPI(initialUrl, initialData){
     //hien tra data
  const [data , setData] = useState(initialData);
  //hien thi ra tim kien
  // const [query,setQuery] = useState("");
///loading khi tim kien
  const [loading, setLoading] = useState(true);
  //loi  khi k cos api
  const [ errorMessage, setErrorMessage] = useState('');
  //de rest lai api 
  const [url, setUrl] = useState(
    initialUrl
    // `https://hn.algolia.com/api/v1/search?query=''`
  );
  const isMouted = useRef(true);

  useEffect(()=>{
    isMouted.current = true;
    return () => {
      isMouted.current = false;
    };
  },[]);
  const handleFetchData = useRef ({});
  handleFetchData.current = async () =>{
    setLoading(true);
    try {
      const response = await axios.get(url )
      setTimeout(() =>{
       if(isMouted.current){

         setData(response.data?.data ||  []);
         setLoading(false);       
       }
      },3000)
    }
    catch(error){
      setLoading(false);
      setErrorMessage(`the error happy ${error}`);
    };
  };
  // const handleUpdateQuery = lodash.debounce((e) =>{
  //   setQuery(e.target.value)

  // },1000);
    useEffect(() => {
    handleFetchData.current();
  },[url]);
  return {
    // query,
    // setQuery,
    setUrl,
    loading,
    errorMessage,
    data,
  };
}
