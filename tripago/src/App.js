import { useState } from 'react';
import Triplist from './components/Triplist';
import './App.css'

function App() {
  const[showtrip, setShowtrip]=useState(true)
  return (
    <div className='App'>
      <button className='hideopen'
        style={{ position: 'absolute', top: '0' }}
        onClick={() => {
          setShowtrip(!showtrip) //toggling functionality straight up
        }}
>
        Hide/showtrip
      </button>
      {showtrip && <Triplist/>}
    </div>
  )
    
}

export default App;
