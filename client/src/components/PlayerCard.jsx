import React, { useEffect, useState } from "react";
import axios from "axios";
import anon from '../anon2.png'

const PlayerCard = (props) => {
  const [personId, setPersonId] = useState(null)
  const [pos, setPos] = useState(null)
  const [nbaTeam, setNbaTeam] = useState(null)

  useEffect( async () => {
    const res = await axios.get(
      `http://data.nba.net/data/10s/prod/v1/2021/players.json`
    )
    res.data.league.standard.map((player) => {
      if (props.name === `${player.firstName} ${player.lastName}`){
        setPersonId(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`)
      }
    })
    const res2 = await axios.get(
      `https://balldontlie.io/api/v1/players?search=${props.name}`
    )
    setNbaTeam(res2.data.data[0].team.abbreviation)
    setPos(res2.data.data[0].position[0])
  }, [props.players])

  const deletePlayer = async () => {
    await axios.delete(`http://localhost:3001/api/players/details/${props._id}`);
    props.delPlayer(props._id)
  }

  return (
    <div className="playerCard">
      <div>
        {personId ? (
          <div>
          <img className="rosterPics" src={personId} />
          </div>
        ) : (
          <div>
            <img className="rosterPics" src={anon} />
          </div>
        )}
      </div>
      <div>
        {pos ? (
          <div>
            <h3 onClick={props.onClick}>{props.name} {nbaTeam} - {pos}</h3>
          </div>
        ) : (
          <div>
            Loading Data...
          </div>
        )}
      </div>
      <button onClick={deletePlayer}>DEL</button>
    </div>
  )
}

export default PlayerCard