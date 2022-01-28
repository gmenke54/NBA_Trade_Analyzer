import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultsCard from './ResultsCard'

import { BASE_URL } from '../globals'

const TradeResults = (props) => {
  const [aPlayers, setAPlayers] = useState([])
  const [bPlayers, setBPlayers] = useState([])

  useEffect( async () => {
    const resA = await axios.get(
      `${BASE_URL}/players/${props.teamA_id}`
    )
    const resB = await axios.get(
      `${BASE_URL}/players/${props.teamB_id}`
    )
    setAPlayers(resA.data.players)
    setBPlayers(resB.data.players)
  }, [props.params])
  
  return (
    <div>
      {aPlayers !== [] && bPlayers !== [] ? (
        <div>
        <ResultsCard 
          aPlayers={aPlayers} 
          bPlayers={bPlayers} 
          teamA_name={props.teamA_name} 
          teamB_name={props.teamB_name}
          pts={props.pts}
          fgp={props.fgp}
          ftp={props.ftp}
          fg3m={props.fg3m}
          reb={props.reb}
          ast={props.ast}
          st={props.st}
          blk={props.blk}
          ftm={props.ftm}
          turnOver={props.turnOver}
        />
        </div>
      ) : (
        <div>
          Loading Players...
        </div>
      )}
    </div>
  )
}

export default TradeResults
