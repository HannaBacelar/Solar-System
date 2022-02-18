import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missons from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missons />
      </>
    );
  }
}

export default App;
