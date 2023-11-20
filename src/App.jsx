import Pg1AnimalGallery from './pages/Pg1AnimalGallery';
import Pg2Trains from './pages/Pg2Trains';
import Pg3Workouts from './pages/Pg3Workouts';
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div style={{ textAlign: "center", color: "darkBlue", borderStyle: "dashed"}}>
        <header>
        <p>
          I built this web app to help myself re-learn React. <br></br>
          Here, I collect different mini-applications to showcase my skills and try out ideas. I might incorporate different elements and ideas found here into other, standalone web apps. <br></br>
          Things here may look incomplete or change. Stay tuned! - Oliver <br></br>
          <br></br>
          Navigate the pages using the navbar.
          <br></br>
        </p>  
        </header>
      </div>
      <br></br>

      <div>

        {/* START CODE FOR PAGE NAVIGATION*/}
        <label>Pages: </label>
        <Link to="/">Home</Link>
        <Link to="/animals">Animals gallery</Link>
        <Link to="/trains">Trains</Link>
        <Link to="/workouts">Workouts</Link>
        <hr></hr>
        {/* END CODE FOR PAGE NAVIGATION*/}
        
        {/* START CODE FOR PAGE CONTENT */}
        <Routes>
          <Route path="/"         element={<h1>Use the navbar above!</h1>}/>
          <Route path="/animals"  element={<Pg1AnimalGallery/>}/>
          <Route path="/trains"   element={<Pg2Trains/>}/>
          <Route path="/workouts" element={<Pg3Workouts/>}/>
        </Routes>
        {/* END CODE FOR PAGE CONTENT */}
        
      </div>

    </>
  );
  
}

export default App;
