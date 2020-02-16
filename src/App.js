import React from 'react';
import Header from './components/Header';
import MainImage from './components/MainImage';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Pushups from './images/pushups.jpg';
import './App.css';

function App() {
  return (
    <div id="app">
    <Header/>
    <MainImage
      title="Learn To Train Like A Professional"
      details="Schedule A Consultation Now!"
      cta="Go now"
      img={Pushups}
      alt="Couple Training"
    />
    <Plans/>
    <Footer/>
    </div>
  );
}

export default App;
