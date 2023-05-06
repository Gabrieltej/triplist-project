import{useState, useEffect} from 'react'

const useFetch=(url)=>{
const[data, setData]=useState(null)
const[isPending, setIspending]= useState(false)
const[error, setError]=useState(null)

useEffect(()=>{   //note where we are creating the async function that we are not creating it with the embedded useeffect function
const fetchData=async()=>{
 setIspending(true)
 try{  //the try and catch block is useful to check if there is going to be an error,  and error can only occur(the response will not show) if there is not access to the internet as the case may be but normally fetch will always return a response, so we can se the error as a status inside. In the response that we are getting we can now access the status(404, 400 etc) , we can also check for the ok also , if the endpoint is not right then we have ok:false but true when the endpoint is correct. You will alwayss get a response even if we send a request to the wrong endpoint and you will see a status of "not found"
const res= await fetch(url)
if(!res.ok){
 throw new Error(res.statusText)
}
 const json=await res.json()
 setData(json)
 setIspending(false)
 setError(null)
 } catch(err){
  setIspending(false)
   setError('could not fetch the data')
   console.log(err.message)
 }
 
}
 fetchData()

},[url])  //we are passing  the url as a dependency in the array so that when say the url changes, it going to rerun the async code once again
 return { data, isPending, error }

}

export default useFetch