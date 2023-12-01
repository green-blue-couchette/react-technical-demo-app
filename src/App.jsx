import PgHome from './pages/PgHome';
import PgTrains from './pages/PgTrains';

import './stylesheets/App.css';

import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        OLIVER'S REACT APP
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
          <Route path="/"         element={<PgHome/>}/>
          <Route path="/trains"   element={<PgTrains/>}/>
        </Routes>
        {/* END CODE FOR PAGE CONTENT */}
      </main>

    </>
  );
  
}

export default App;
