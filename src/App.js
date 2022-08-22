import React, { useState } from 'react';
import Pad from './components/Pad';
import './App.css';
import sounds from './sounds';

const App = () => {

  const [display, setDisplay] = useState("");

  const drumSounds = sounds.map(sound => 
    <Pad sound={sound} key={sound.id} setDisplay={setDisplay}/>
  )

  return (
    <div className="bg-dark min-vh-100 text-white text-center p-4">
      <div id="drum-machine">
        <h1 className="text-warning">Drum Machine</h1>
        <div id="display" className="fs-3 m-4">
          <h2 className="p-2">Key pressed</h2>
          {display}
        </div>
          {drumSounds}
      </div>
    </div>
  )
}

export default App;