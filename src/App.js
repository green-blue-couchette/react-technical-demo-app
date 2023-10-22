import React, {useState, useRef, useEffect} from 'react';
import Pg1AnimalGallery from './Pg1AnimalGallery';
import Pg2Trains from './Pg2Trains';
import Pg3Workouts from './Pg3Workouts';

function App() {
  
  const [pageNumber, setPageNumber] = useState([1]);
  const pageNumberRef = useRef();

  const [pageContent, setPageContent] = useState([]);

  const LOCAL_STORAGE_KEY = "react-technical-demo-app.page";

  // load pageNumber state from local storage, when page starts up
  useEffect( () => {
    const storedPage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setPageNumber(storedPage);

    //logging
    console.log("Loaded page state from local storage... Page " + storedPage);
  }, [])

  // save pageNumber state to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pageNumber));

    // logging
    console.log("Saved page " + pageNumber + " to local storage");
  }, [pageNumber])
  
  
  function changeToPage(){
    const newPageNumber = pageNumberRef.current.value;
    setPageNumber(newPageNumber);

    // logging
    console.log("Page changed to " + newPageNumber);
  }

  // change displayed page
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
      <div style={{ textAlign: 'center', color: "darkBlue", borderStyle: "dashed"}}>
        <header>
        <p>
          I built this web app to help myself re-learn React. <br></br>
          Here, I collect different mini-applications to showcase my skills and try out ideas. I might incorporate different elements and ideas found here into other, standalone web apps. <br></br>
          Things here may look incomplete or change. Stay tuned! - Oliver <br></br>
          <br></br>
          Navigate the pages using the input fields.
          <br></br>
        </p>  
        </header>
      </div>
      <br></br>

      {/*The div contains all my own code.*/}
      <div>
        {/* START CODE FOR SWITCHING BETWEEN PAGES*/}
        <label>Page: </label>
        <form>
          <select onChange={changeToPage} ref={pageNumberRef}>
            <option value="1">Animals gallery</option>
            <option value="2">Trains</option>
            <option value="3">Workouts</option>
          </select>
        </form>
        <hr></hr>
        {/* END CODE FOR SWITCHING BETWEEN PAGES*/}
        
        {pageContent}
        
      </div>

    </>
  );
  
}

export default App;
