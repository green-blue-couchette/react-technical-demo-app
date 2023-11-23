import Pg2Trains from './pages/Pg2Trains';
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
        <Link to="/trains">Trains</Link>
        <hr></hr>
        {/* END CODE FOR PAGE NAVIGATION*/}
        
        {/* START CODE FOR PAGE CONTENT */}
        <Routes>
          <Route path="/"         element={<h1>Use the navbar above!</h1>}/>
          <Route path="/trains"   element={<Pg2Trains/>}/>
        </Routes>
        {/* END CODE FOR PAGE CONTENT */}
        
      </div>

    </>
  );
  
}

export default App;
