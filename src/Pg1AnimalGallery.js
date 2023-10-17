import React, {useState, useRef} from 'react'
import PhotoFrame from './PhotoFrame';

export default function Pg1AnimalGallery() {
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
    console.log("Animal number changed to " + newAnimalNumber);
  }

  return (
    <>
      <h1>Animal gallery page</h1>

      <button onClick={toggleShowPhoto}>Show/hide photo!</button>
      
      <label>Display animal:</label>
      <input ref={animalNumberRef} onChange={updateAnimalNumber} value={animalNumber} type="text"></input>

      <PhotoFrame isVisible={photoIsVisible} animalNumber={animalNumber}/>
    </>
  )
}
