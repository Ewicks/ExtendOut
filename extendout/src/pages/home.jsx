import React from 'react';
import Homeimage from '../assets/images/home-img.png';
import '../../src/App.css';


const Home = () => {
  return (
    <div className='home-page'>
      <img className='home-img' src={Homeimage} alt="home-image" />
      <div className="center">
        <h1 className='home-title font-bold underline'>Testing text center</h1>
      </div>
    </div>

  );
}

export default Home;
