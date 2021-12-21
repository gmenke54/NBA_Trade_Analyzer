import React, { useEffect, useState } from "react";
import axios from 'axios'
import anon from '../anon2.png'

const PlayerPic = (props) => {
  const [personId, setPersonId] = useState(null)

  useEffect( async () => {
    const res = await axios.get(
      `http://data.nba.net/data/10s/prod/v1/2021/players.json`
    )
    res.data.league.standard.map((player) => {
      if (props.last === player.lastName && props.first === player.firstName){
        setPersonId(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`)
      }
    })
  }, [props.params])

  return (
    <div>
      {personId ? (
        <div>
        <img src={personId} />
        </div>
      ) : (
        <div>
          <img src={anon} />
        </div>
      )}
    </div>
  )
}

export default PlayerPic