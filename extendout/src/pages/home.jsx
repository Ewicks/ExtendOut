import React from 'react';
import Homeimage from '../assets/images/home-img.png';
import Kitchen from '../assets/images/kitchen.png';
import Kitchentwo from '../assets/images/kitchentwo.png';
import '../../src/App.css';


const Home = () => {
  return (
    <div className='home-page'>
      <img className='home-img' src={Homeimage} alt="home-image" />
      <div className="center">
        <h1 className='home-title font-bold underline'>Testing text center</h1>
      </div>
      <div className="container">
      <div className="columns-2">
          <h1 class='w-full flex justify-center align-middle'>hi</h1>
          <img src={Kitchen} class='kitchen-img' alt="" />
       
        </div>
        <div className="columns-2">
          <img src={Kitchentwo} class='kitchen-img' alt="" />
          <h1 class='w-full flex justify-center align-middle'>hi</h1>
       
        </div>

      </div>
       
    </div>

  );
}

export default Home;
