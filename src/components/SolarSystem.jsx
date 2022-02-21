import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="sistema" data-testid="solar-system">
        <div className="subtitulo2">
          <Title headline="Planetas" />
        </div>

        <div className="planets">
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
      </div>

    );
  }
}
export default SolarSystem;
