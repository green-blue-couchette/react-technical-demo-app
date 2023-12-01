import PgTrains from './pages/PgTrains';

import './stylesheets/App.css';

import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        <p>
          I built this web app to help myself re-learn React. 
          Here, I collect different mini-applications to showcase my skills and try out ideas. I might incorporate different elements and ideas found here into other, standalone web apps. 
          Things here may look incomplete or change. Stay tuned! - Oliver 
        </p>
        <p>  
          Navigate the pages using the navbar.
        </p>  
      </header>

      {/* START CODE FOR PAGE NAVIGATION*/}
      <nav>
        <Link to="/"      >Home</Link>
        <Link to="/trains">Trains</Link>
        <hr></hr>
      </nav>
      {/* END CODE FOR PAGE NAVIGATION*/}
        
      <main>
        {/* START CODE FOR PAGE CONTENT */}
        <Routes>
          <Route path="/"         element={<h1>Use the navbar above!</h1>}/>
          <Route path="/trains"   element={<PgTrains/>}/>
        </Routes>
        {/* END CODE FOR PAGE CONTENT */}
      </main>

    </>
  );
  
}

export default App;
