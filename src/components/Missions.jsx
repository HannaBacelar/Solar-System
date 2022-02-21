import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <div>
          <Title headline="Missões" />
        </div>
        <div className="missions">
          {
            missions.map((missoes) => (
              <MissionCard
                key={ missions.name }
                name={ missoes.name }
                year={ missoes.year }
                country={ missoes.country }
                destination={ missoes.destination }

              />
            ))
          }
        </div>
      </div>

    );
  }
}

export default Missions;
