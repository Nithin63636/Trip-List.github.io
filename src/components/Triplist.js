import React, { useState } from 'react';
import {UseFetch} from '../hooks/usefetch';
import './Triplist.css';

export default function Triplist() {
 // const [trips,setTrips] = useState([]);
  const [url,setUrl] = useState('http://localhost:3000/trips');
  const {data: trips , isPending, error } = UseFetch(url,{ type : "Get"});
    /*useEffect(()=>{
      fetch(url) //asynchronous task 
      .then(response => response.json())
      .then(json => setTrips(json))
    },[url])*/ // no need using usefetch instead
    
     console.log(trips);

  return (
    <div className='trip-list'>
     <h2>Trip List</h2>
     {isPending && <div> 
      <h2>Loading Trips. . .</h2>
      </div>}
      {error && <div> <h2>{error}</h2></div>}
     <u>
      {trips && trips.map(trip=>(
        <li key={trip.id} className='trip-list'>
          <h3>{trip.title}</h3>
          <p>{trip.price}</p>
        </li>
      ))} 
     </u>
     <div className='filters'>
      <button onClick={()=>setUrl('http://localhost:3000/trips?loc=europe')}>Europe Trips</button>
      <button onClick={()=>setUrl('http://localhost:3000/trips')}>All Trips</button>
     </div>
    </div>
  )
}
