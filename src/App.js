import React, {useState, useRef} from 'react';
import PhotoFrame from './PhotoFrame';

function App() {
  const [photoIsVisible, setPhotoIsVisible] = useState([true]);
  const [animalNumber, setAnimalNumber] = useState([1]);
  const animalNumberRef = useRef();
  
  function toggleShowPhoto(){
    setPhotoIsVisible(!photoIsVisible);
  }

  function updateAnimalNumber(){
    const newAnimalNumber = animalNumberRef.current.value;

    setAnimalNumber(newAnimalNumber);

    //logging
    console.log("Animal number changed to" + newAnimalNumber);
  }


  return (
    <>
      <div style={{ textAlign: 'center', color: "lightBlue", borderStyle: "dashed"}}>
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>

      {/*The div contains all my own code.*/}
      <div>
      <button onClick={toggleShowPhoto}>Show/hide photo!</button>
      
      <label>Display animal:</label>
      <input ref={animalNumberRef} onChange={updateAnimalNumber} value={animalNumber} type="text"></input>
      <PhotoFrame isVisible={photoIsVisible} animalNumber={animalNumber}/>
      </div>
    </>
  );

  
}

export default App;
