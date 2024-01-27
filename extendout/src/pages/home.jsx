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
      <div className="row">
        <div className="col my-5 text-center">
          <h1 className='fw-bold title'>title</h1>
        </div>
      </div>
      <div className="row">
        <div className="col p-0 d-flex justify-content-center align-items-center">
          <h1>askdasdkak skd</h1>
          <p>asdasdasd asd asd as</p>
        </div>
        <div className="col p-0">
          <img className='kitchen-img' src={Kitchen} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <img className='kitchen-img' src={Kitchentwo} alt="" />
        </div>
        <div className="col p-0 d-flex justify-content-center align-items-center">
          <h1>askdasdkak skd</h1>
          <p>asdasdasd asd asd as</p>
        </div>
     
      </div>
    </div>

  );
}

export default Home;
