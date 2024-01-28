import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Contact from './pages/contact';
import Design from './pages/design';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/design' element={<Design />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </div>
    
  );
}



export default App;
