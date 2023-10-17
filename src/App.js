import React, {useState, useRef, useEffect} from 'react';
import Pg1AnimalGallery from './Pg1AnimalGallery';
import Pg2Trains from './Pg2Trains';
import Pg3Workouts from './Pg3Workouts';

function App() {
  
  const [pageNumber, setPageNumber] = useState([1]);
  const pageNumberRef = useRef();

  const [pageContent, setPageContent] = useState([]);
  
  function changeToPage(){
    const newPageNumber = pageNumberRef.current.value;
    setPageNumber(newPageNumber);

    // logging
    console.log("Page changed to " + newPageNumber);
  }

  useEffect(() => {
    if(pageNumber == 1 ) // animals gallery
      setPageContent(<Pg1AnimalGallery/>)
    else if(pageNumber == 2 ) // trains page
      setPageContent(<Pg2Trains/>)
    else if(pageNumber == 3) // workouts page
      setPageContent(<Pg3Workouts/>)
    else  // default case, unexistent page
      setPageContent(<p>Page doesn't exist. Choose between 1-3.</p>)
  }, [pageNumber])


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
        {/* CODE FOR SWITCHING BETWEEN PAGES START*/}
        <label>Page: </label>
        <input ref={pageNumberRef} onChange={changeToPage}  type="text"></input>
        <hr></hr>
        {/* CODE FOR SWITCHING BETWEEN PAGES END*/}
        
        {pageContent}
        
      </div>

    </>
  );

  
}

export default App;
