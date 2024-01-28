import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Contact from './pages/contact';
import Design from './pages/design';
import Build from './pages/build';
import Gallary from './pages/gallary';
import Team from './pages/team';
import Blog from './pages/blog';
import Testimonials from './pages/testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/design' element={<Design />} />
          <Route path='/build' element={<Build />} />
          <Route path='/gallary' element={<Gallary />} />
          <Route path='/team' element={<Team />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </div>
    
  );
}



export default App;
