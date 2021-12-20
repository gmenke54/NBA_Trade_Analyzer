import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CareerStats from '../components/CareerStats';
import PlayerPic from '../components/PlayerPic';

const PlayerDetails = (props) => {
  const [ply, setPly] = useState(null);

  const getPlayer = async () => {
    const res = await axios.get(
      `https://balldontlie.io/api/v1/players?search=${props.match.params.name}`
    );
    console.log(res.data.data[0]);
    setPly(res.data.data[0]);
  };

  useEffect(() => {
    getPlayer();
  }, [props.match.params.name]);
  if (ply) {
    return (
      <div>
        <div>
          <PlayerPic first={ply.first_name} last={ply.last_name} />
        </div>
        <div>
          {ply.height_feet ? (
            <div>
              <h1>
                {ply.first_name} {ply.last_name} - {ply.position}
              </h1>
              <h3>{ply.team.full_name}</h3>
              <h4>
                {ply.height_feet}' {ply.height_inches}" - {ply.weight_pounds}lbs
              </h4>
            </div>
          ) : (
            <div>
              <h1>
                {ply.first_name} {ply.last_name} - {ply.position}
              </h1>
              <h3>{ply.team.full_name}</h3>
            </div>
          )}
        </div>
        <div>
          <CareerStats {...props} id={ply.id} />
        </div>
      </div>
    );
  } else {
    return <div>Finding {props.match.params.name}'s stats...</div>;
  }
};

export default PlayerDetails;
