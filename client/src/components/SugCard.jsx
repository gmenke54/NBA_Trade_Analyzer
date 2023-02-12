import React, { useEffect, useState } from "react";
import axios from "axios";
import SugCardDisp from "./SugCardDisp";
import allPlayers from "../data/all_players.json"

const SugCard = (props) => {
  const [curPlayers, setCurPlayers] = useState(null)

  useEffect( async () => {
    // const res = await axios.get(
    //   `https://data.nba.net/data/10s/prod/v1/2022/players.json`
    // )
    setCurPlayers(allPlayers.league.standard)
  }, [props.params])

  return (
    <div>
      {curPlayers ? (
        <div>
          <SugCardDisp 
            fName={props.fName}
            lName={props.lName}
            team={props.team}
            onClick={props.onClick}
            curPlayers={curPlayers}
          />
        </div>
      ) : (
        null
      )}
        
    </div>
    
  )
}

export default SugCard