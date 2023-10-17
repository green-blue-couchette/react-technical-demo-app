import React, {useState} from 'react';
import PhotoFrame from './PhotoFrame';

function App() {
  const [photoIsVisible, setPhotoIsVisible] = useState([true]);

  function toggleShowPhoto(){
    setPhotoIsVisible(!photoIsVisible);
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
      <PhotoFrame isVisible={photoIsVisible}/>
      </div>
    </>
  );

  
}

export default App;
