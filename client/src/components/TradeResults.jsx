// https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237 <- AXIOS CALL FOR GETTING PLAYERS CURRENT SEASON AVERAGES BY THEIR EXTERNAL API's ID

import React, { useEffect, useState } from "react";
import axios from "axios";

const TradeResults = (props) => {
  const [aPlayers, setAPlayers] = useState([])
  const [bPlayers, setBPlayers] = useState([])
  const [aStats, setAStats] = useState([])
  const [bStats, setBStats] = useState([])
  
  const getTeams = async () => {
    const resA = await axios.get(`http://localhost:3001/api/players/${props.teamA_id}`)
    const resB = await axios.get(`http://localhost:3001/api/players/${props.teamB_id}`)
    setAPlayers(resA.data.players)
    setBPlayers(resB.data.players)
    console.log(resA.data.players)
    console.log(resB.data.players)
    const apiCall = aPlayers.reduce((acc, player) => {
      let plyId = player.api_Id.toString()
      acc += `player_ids[]=${plyId}&`
      return acc
    }, 'https://www.balldontlie.io/api/v1/season_averages?')
    const res = await axios.get(`${apiCall}`)
    console.log(res.data.data)
  }

  // PLAN:
  // 1. Fix bug with the above api call returning an empty array after refreshing the page (need to load the players prior getting the stats)
  // 2. Duplicate the process used to get aStats for bStats
  // 3. Write a new propiertary algorithm that compares bStats to aStats and determines the better trade package
  // 4. conditionally render the better team in the returned div
  // 5. add explanation to the analysis

  useEffect(() => {
    getTeams()
  }, [props.params])
  
  return (
    <div>
      <h1>Analysis</h1>
      <h2>TeamA: {props.teamA_id}</h2>
    </div>
  )
}

export default TradeResults