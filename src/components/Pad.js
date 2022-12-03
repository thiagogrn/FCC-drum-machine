import React, { useEffect, useState } from 'react';

const Pad = ({ sound, setDisplay }) => {

  const [select, setSelect] = useState(false);

  useEffect(()=>{
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    }
  }, [])

  const handleKey = event => {
    if(event.keyCode === sound.keyCode) {
      playAudio();
    }
  }

  const playAudio = () => {
    const audio = document.getElementById(sound.keyTrigger);
    setSelect(true);
    setTimeout(()=> setSelect(false), 1500);
    audio.currentTime = 0;
    audio.play();
    setDisplay(sound.keyTrigger);
  }

  return (
      <div className={`drum-pad btn btn-secondary p-5 m-3 fs-4 ${ select && 'btn-warning'}`} id={sound.id} onClick={playAudio}>
        {sound.keyTrigger}
        <audio src={sound.url} className="clip" id={sound.keyTrigger}/>
      </div>
  )
}

export default Pad;
