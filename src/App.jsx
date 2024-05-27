import './index.css'; 

import Navbar from './Componentes/Navbar';
import Home from './Screens/Home';
import Principal from './Screens/Principal';
import Contact from './Screens/Contact';
import Page from './Screens/Page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className='App bg-gray-100'>
      <Router>
        <div className='flex flex-col'>
          <div className='relative z-10 pb-20'>
            <Navbar />
          </div>

          {/* Vinculación de las páginas */}
          <Routes>
            <Route path='/' element={<Principal />} />
            <Route path='/Page' element={<Page />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Home' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;


