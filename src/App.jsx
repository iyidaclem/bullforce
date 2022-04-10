
import './css/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Main from './pages/Main';
import Staking from './comps/Staking';

function App() {
  return (
    <Router>
      <div className="App">

       <Routes>
         <Route path='/' element={  <Main />} />
         <Route path='/staking' element={  <Staking />} />
      </Routes>      
     
    </div>
    </Router>
  );
}

export default App;
