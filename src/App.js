import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missons from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missons />
        <footer> Meu primeiro Projeto em React</footer>
      </>
    );
  }
}

export default App;
