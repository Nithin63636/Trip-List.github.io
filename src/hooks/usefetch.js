import { useState, useEffect,useRef } from "react";
// useEffect runs everytime when the object passed in them changes , if you pass {object }, function , array their ref changes everytime 
// a context is created , so for we use useCallback for functions , anf wrap UseState around arrrays and object and then pass it 
export const UseFetch = (url, _options) => {
  const [ data , setData] = useState (null)
  const [isPending , setPending] = useState(false);
  const [error,setError] = useState(null)
  const options = useRef(_options).current
  
  useEffect(() => { // useCallback function so that useEffect doesnot run everytime function refernce changes
  console.log(options);
  const controller = new AbortController();
  
  const fetchData = async () =>{
    setPending(true);

    try{
    const res = await fetch(url,{signal : controller.signal});
    if(!res.ok){
        throw new Error(res.statusText);
    }

    const json = await res.json();
    setPending(false)
    setData(json)
    setError(null)

  }
  catch(err){
  if(err.name==="AbortError")
  {
    console.log("The fetch was Aborted ")
  }
  else{
    setPending(false);
    setError('Could not Fetch Properly . . .')
  }}}

  fetchData()
  return ()=>{
    controller.abort()  //if we press hide trips before the data is fetched
  }                     //it should abort


}, [url,options])

return { data , isPending ,error}
}
