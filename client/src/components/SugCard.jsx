import React, { useEffect, useState } from "react";
import axios from "axios";
import anon from '../anon2.png'

const SugCard = (props) => {
  const [personId, setPersonId] = useState(null)

  useEffect( async () => {
    const res = await axios.get(
      `http://data.nba.net/data/10s/prod/v1/2021/players.json`
    )
    res.data.league.standard.map((player) => {
      if (props.lName === player.lastName && props.fName === player.firstName){
        setPersonId(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`)
      }
    })
  }, [props.params])

  return (
    <div className="sugCard" onClick={props.onClick}>
      <div>
        {personId ? (
          <div>
          <img className="sugPics" src={personId} />
          </div>
        ) : (
          <div>
            <img className="sugPics" src={anon} />
          </div>
        )}
      </div>      
      <h5>{props.fName} {props.lName} - {props.team}</h5>
    </div>
  )
}

export default SugCard