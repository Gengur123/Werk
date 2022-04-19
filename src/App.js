import './App.css';
import About from './pages/AboutUs'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Home from './pages/Home'
import Inventory from './pages/Inventory';
import Service from './pages/Service';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Subfooter from './components/Subfooter';

function App() {

  // App.js is gonna be where all our pages will be called and routed. 
  return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/service' element={<Service />} />
          </Routes>
          <Subfooter/>
          <Footer />
        </Router>
  );
}

export default App;
