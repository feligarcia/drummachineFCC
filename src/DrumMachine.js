import React from 'react';
import exp from './data/explosion.mp3'
import guita from './data/guitar.mp3'
import guitalage from './data/guitarlage.mp3'
import platill from './data/platillo.mp3'
import platibig from './data/platillosbig.mp3'
import saxo from './data/saxofon.mp3'
import tambo from './data/tambor.mp3'
import trom from './data/trompeta.mp3'
import xilo from './data/xilofono.mp3'
import { useState } from 'react';
import { useEffect } from 'react';

function DrumMachine() {
    const [infoboton, setInfoboton] = useState('Activa la caja!');
    
    const handleActivate =(e) =>{
        const boton = e.target.innerText
        setInfoboton(e.target.title)
        console.log(boton)
        console.log(infoboton)
        const audio = document.getElementById(boton)
        audio.play()
    }

    const handleKey =(tecla) =>{
        const audio = document.getElementById(tecla)
        audio?.play()
        if(audio?.title){setInfoboton(audio?.title)} else {setInfoboton('Tecla incorrecta, intenta de nuevo')}
        
    }
    

useEffect(() => {
    const listener = event => {
        event.preventDefault();
        let tecla = event.key?.toLocaleUpperCase()
        handleKey(tecla)
        
        
    }
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);


  return (
  <div id="drum-machine">
      <h1 className='titulo'>Drum Machine</h1>
      <div className='col'>
      <div className='contenedor'>
            <button className="drum-pad" id="explosion" title='explosion' onClick={handleActivate}>Q
                <audio src={exp} className='clip' id='Q' title='explosion'></audio>
            </button>
            <button className="drum-pad" id="guitar" title='guitarra electrica' onClick={handleActivate}>W
                <audio src={guita} className='clip' id='W'title='guitarra electrica'></audio>
            </button>
            <button className="drum-pad" id="guitarlage" title='guitar lage' onClick={handleActivate}>E
                <audio src={guitalage} className='clip' id='E' title='guitar lage'></audio>
            </button>
            <button className="drum-pad" id="platillo" title='platillo' onClick={handleActivate}>A
                <audio src={platill} className='clip' id='A' title='platillo'></audio>
            </button>
            <button className="drum-pad" id="plastillosbig" title='platillo principal' onClick={handleActivate}>S
                <audio src={platibig} className='clip' id='S' title='platillo principal'></audio>
            </button>
            <button className="drum-pad" id="saxofon" title='saxofon' onClick={handleActivate}>D
                <audio src={saxo} className='clip' id='D' title='saxofon'></audio>
            </button>
            <button className="drum-pad" id="tambor" title='tambor redoblante' onClick={handleActivate}>Z
                <audio src={tambo} className='clip' id='Z' title='tambor redoblante'></audio>
            </button>
            <button className="drum-pad" id="trompeta" title='trompeta' onClick={handleActivate}>X
                <audio src={trom} className='clip' id='X' title='trompeta'></audio>
            </button>
            <button className="drum-pad" id="xilofono" title='xilofono' onClick={handleActivate}>C
                <audio src={xilo} className='clip' id='C' title='xilofono'></audio>
            </button>
      </div>
      <div id="display"><h3>{infoboton}</h3></div>
      </div>
  </div>
    );
}

export default DrumMachine;
