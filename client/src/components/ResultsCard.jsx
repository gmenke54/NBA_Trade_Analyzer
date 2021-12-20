import React, { useEffect, useState } from "react";
import axios from "axios";

const TradeResults = (props) => {
  const { aPlayers, bPlayers } = props
  const [aStats, setAStats] = useState([])
  const [bStats, setBStats] = useState([])

  useEffect( async () => {
    const apiCall = aPlayers.reduce((acc, player) => {
      let plyId = player.api_Id.toString()
      acc += `player_ids[]=${plyId}&`
      return acc
    }, 'https://www.balldontlie.io/api/v1/season_averages?')
    const res = await (axios.get(`${apiCall}`))
    const apiCall2 = bPlayers.reduce((acc, player) => {
      let plyId = player.api_Id.toString()
      acc += `player_ids[]=${plyId}&`
      return acc
    }, 'https://www.balldontlie.io/api/v1/season_averages?')
    const res2 = await (axios.get(`${apiCall2}`))
    console.log(res.data.data)
    console.log(res2.data.data)
    setAStats(res.data.data)
    setBStats(res2.data.data)
  }, [aPlayers, bPlayers])

  
  return (
    <div>
      <h1>Analysis</h1>
      <h2>TeamA: {props.teamA_id}</h2>
    </div>
  )
}

export default TradeResults