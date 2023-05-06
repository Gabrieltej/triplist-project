import React, { useState } from 'react' //so since we are using the useeffect in another component, then we don't need to import it here else we are going to get an error warning

import useFetch from '../hooks/useFetch'
//styles

import './Triplist.css'
export default function Triplist() {
  const [url, setUrl] = useState('http://localhost:3000/trips')
  //if i put in the wrong url,then fetch will not work
  
  const{data, isPending, error}= useFetch(url)

  //so basically the usecallback function is used to prevent function dependency trigerring useeffect rerun  
   //passing in an empty dependency array will prevent us from running into an infinite loop, while passing in the url inside of the array will  allow the array to watch for changes and execute the asynxhronous code again 

  //later we are declaring the fetchTrip function outside of the useeffect so we can now call it inside of the useEffect hook, we must make sure that we pass in that outside declared function as an array and not only the state. so basically since we are declaring outsde of the scope(of which the useEfect hook would like to access), we must pass the stuff as a dependency () course will cause an infinite loop basically saying that we can have more than one dependency in our useEffect hook. now after passing in the dependency vale which is the url this time, or the function taht we wanted to pass in, we got an infinite loop. We can find our way through this infinite loop by using useCallbacks,

  //sometimes we may not be able to find our way through the infinite loop, and and so we have to make use of the callback function but most times, you just do the normal thing that we do with auseEffect and the likes

 return (
   <div className='trip-list'>
     {error && <div>there was an error</div>}

     {isPending && <div>loading trip.....</div>}
     <h2>Triplist</h2>
     <ul>
       {data &&
         data.map((trip) => {
           return (
             <li key={trip.id}>
               <h3>{trip.title}</h3>
               <p>{trip.price}</p>
               <hr className='divider'/>
             </li>
           )
         })}
     </ul>
     <div className='filter'>
       <button
         className='eutripbtn'
         onClick={() => {
           setUrl('http://localhost:3000/trips?loc=europe') //so what we are basically saying is that we want to look into the json and filter out the ones with the "loc" set to europe and then we are able to set the URL to another thing since we are passing in our state also as a dependency array and then the useefect function can rerun as a result of these settings
         }}
       >
         European trips
       </button>
       <button
         className='allbtn'
         onClick={() => {
           setUrl('http://localhost:3000/trips')
         }}
       >
         All trips
       </button>
     </div>
   </div>
 )
}
