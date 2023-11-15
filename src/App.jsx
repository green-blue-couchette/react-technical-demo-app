import React, {useState, useRef, useEffect} from 'react';
import Pg1AnimalGallery from './pages/Pg1AnimalGallery';
import Pg2Trains from './pages/Pg2Trains';
import Pg3Workouts from './pages/Pg3Workouts';

function App() {
  
  const [pageNumber, setPageNumber] = useState([]);
  const pageNumberRef = useRef();

  const [pageContent, setPageContent] = useState([]);

  const LOCAL_STORAGE_KEY = "react-technical-demo-app.page";

  // load pageNumber state from local storage, when page starts up
  useEffect( () => {
    const storedPageNumber = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    // if localstorage has no saved value (null) or the closed page state (0), then default to page 0.
    if(!storedPageNumber){
      // logging
      console.log("No stored page was found (got value", storedPageNumber, "from localStorage.) Defaulting to the closed page.");

      setPageNumber(0);
      return;
    }

    setPageNumber(storedPageNumber);

    //logging
    console.log("Loaded page state", storedPageNumber, "from local storage.");
  }, [])

  // save pageNumber state to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pageNumber));

    // logging
    console.log("Page changed to " + pageNumber + ". Saved to local storage.");
  }, [pageNumber])
  
  
  function changeToPage(){
    const newPageNumber = pageNumberRef.current.value;
    setPageNumber(newPageNumber);
  }

  function closePage(){
    setPageNumber(0);
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
      setPageContent(<p>Pages are closed. Choose from the drop-down menu above.</p>)
  }, [pageNumber])


  return (
    <>
      <div style={{ textAlign: "center", color: "darkBlue", borderStyle: "dashed"}}>
        <header>
        <p>
          I built this web app to help myself re-learn React. <br></br>
          Here, I collect different mini-applications to showcase my skills and try out ideas. I might incorporate different elements and ideas found here into other, standalone web apps. <br></br>
          Things here may look incomplete or change. Stay tuned! - Oliver <br></br>
          <br></br>
          Navigate the pages using the drop-down menu.
          <br></br>
        </p>  
        </header>
      </div>
      <br></br>

      {/*The div contains the page switcher drop-down and the displayed page content.*/}
      <div>

        {/* START CODE FOR PAGE NAVIGATION*/}
        <label>Page: </label>
        <select onChange={changeToPage} ref={pageNumberRef}>
          <option value="0" selected={0==pageNumber} disabled hidden></option> {/* Disabled menu item for closed page case */}
          <option value="1" selected={1==pageNumber}>Animals gallery</option>
          <option value="2" selected={2==pageNumber}>Trains</option>
          <option value="3" selected={3==pageNumber}>Workouts</option>
        </select>

        <input type="button" value="Close page" onClick={closePage} />

        <hr></hr>
        {/* END CODE FOR PAGE NAVIGATION*/}
        
        {/* START CODE FOR PAGE CONTENT */}
        {pageContent}
        {/* END CODE FOR PAGE CONTENT */}
        
      </div>

    </>
  );
  
}

export default App;
