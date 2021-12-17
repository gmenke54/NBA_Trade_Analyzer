import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    );
  } else {
    return <div>Finding {props.match.params.name}'s stats...</div>;
  }
};

export default PlayerDetails;
