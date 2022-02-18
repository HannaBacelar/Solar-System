import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((planetas) => (
            <PlanetCard
              key={ planets.name }
              planetName={ planetas.name }
              planetImage={ planetas.image }
            />
          ))
        }
      </div>

    );
  }
}
export default SolarSystem;
