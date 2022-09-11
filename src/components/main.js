import React from 'react';
import BackgroundWeb from '../img/background.png';
import "./main.css";
import Header from './Nav';
import MainBody from './mainBody';
import Footer from './Footer';

function main() {
  return (
    <div>
      <div className='background'>
          <Header />
          <MainBody />
          <Footer />
          
      </div>
    </div>
  )
  
}


export default main
