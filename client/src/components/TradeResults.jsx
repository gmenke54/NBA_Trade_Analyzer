import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultsCard from './ResultsCard'


const TradeResults = (props) => {
  const [aPlayers, setAPlayers] = useState([])
  const [bPlayers, setBPlayers] = useState([])

  useEffect( async () => {
    // getTeams()
    const resA = await axios.get(`http://localhost:3001/api/players/${props.teamA_id}`)
    const resB = await axios.get(`http://localhost:3001/api/players/${props.teamB_id}`)
    setAPlayers(resA.data.players)
    setBPlayers(resB.data.players)
    console.log(resA.data.players)
    console.log(resB.data.players)
  }, [props.params])
  
  return (
    <div>
      {aPlayers !== [] && bPlayers !== [] ? (
        <div>
        <ResultsCard aPlayers={aPlayers} bPlayers={bPlayers} />
        </div>
      ) :(
        <div>
          Loading Players...
        </div>
      )}
    </div>
  )
}

export default TradeResults
