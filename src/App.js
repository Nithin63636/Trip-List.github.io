import { useState } from 'react';
import './App.css';
import Triplist from './components/Triplist';

function App() {
  const [showTrips , setTrips] = useState(true);
  return (
   <div className="App">
  { showTrips &&  (<button onClick={()=>setTrips(false)}> Hide Trips</button>)}
  { !showTrips  && (<button onClick={()=>setTrips(true)}>show Trips</button>)}
   {showTrips && <Triplist/>}
   </div>
  );
}

export default App;
