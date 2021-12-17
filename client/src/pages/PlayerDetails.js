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
  return ply ? (
    <div>
      <h1>
        {ply.first_name} {ply.last_name} - {ply.position}
      </h1>
      <h3>{ply.team.full_name}</h3>
      <h4>
        Height: {ply.height_feet}' {ply.height_inches}"
      </h4>
    </div>
  ) : (
    <div>Player Not found</div>
  );
};

export default PlayerDetails;
