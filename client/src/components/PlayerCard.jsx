import React, { useEffect, useState } from "react";
import axios from "axios";
import anon from '../anon2.png'
import '../css/PlayerCard.css'

import { BASE_URL } from '../globals'

const PlayerCard = (props) => {
  const [personId, setPersonId] = useState(null)
  const [pos, setPos] = useState(null)
  const [nbaTeam, setNbaTeam] = useState(null)

  useEffect( async () => {
    const res = await axios.get(
      `https://data.nba.net/data/10s/prod/v1/2021/players.json`
    )
    res.data.league.standard.map((player) => {
      if (props.name === `${player.firstName} ${player.lastName}`){
        setPersonId(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`)
      }
    })
    const res2 = await axios.get(
      `https://balldontlie.io/api/v1/players?search=${props.name}`)
    setNbaTeam(res2.data.data[0].team.abbreviation)
    setPos(res2.data.data[0].position[0])
  }, [props.players])

  const deletePlayer = async () => {
    await axios.delete(`${BASE_URL}/players/details/${props._id}`);
    props.delPlayer(props._id)
  }

  return (
    <div className="playerCard">
      <section className="player-info-cont">
        <div>
          {pos ? (
            <div>
              <div className="pos">{pos}</div>
            </div>
          ) : (
            <div>
              Loading Data...
            </div>
          )}
        </div>
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
            <div className="player-info" onClick={props.onClick}>
              <div className="player-name" >{props.name}</div>
              <div className="nba-name">{nbaTeam}</div>
            </div>
          ) : (
            <div>
              Loading Data...
            </div>
          )}
        </div>
      </section>
      <div className="delBtn" onClick={deletePlayer}>-</div>
    </div>
  )
}

export default PlayerCard