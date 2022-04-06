import './App.css';
import About from './pages/AboutUs'
import Contact from '../src/pages/Contact'
import Home from '../src/pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  // App.js is gonna be where all our pages will be called and routed. 
  return (
      <Router>
        {/* <ul>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
  );
}

export default App;
