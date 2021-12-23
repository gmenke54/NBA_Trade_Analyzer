import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CareerStats from '../components/CareerStats';
import PlayerPic from '../components/PlayerPic';
import '../css/PlayerDetails.css';

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
      <div className="player-detail-cont">
        <section className="player-detail-info-cont">
          <div className="detail-pos">{ply.position[0]}</div>
          <div className="player-detail-pic">
            <PlayerPic {...props} first={ply.first_name} last={ply.last_name} />
          </div>
          <div className="player-detail-info">
            {ply.height_feet ? (
              <div>
                <h1>
                  {ply.first_name} {ply.last_name}
                </h1>
                <h3>{ply.team.full_name}</h3>
                <h4>
                  {ply.height_feet}' {ply.height_inches}" - {ply.weight_pounds}
                  lbs
                </h4>
              </div>
            ) : (
              <div>
                <h1>
                  {ply.first_name} {ply.last_name}
                </h1>
                <h3>{ply.team.full_name}</h3>
              </div>
            )}
          </div>
        </section>
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
