// https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237 <- AXIOS CALL FOR GETTING PLAYERS CURRENT SEASON AVERAGES BY THEIR EXTERNAL API's ID

import React, { useEffect, useState } from "react";
import axios from "axios";

const TradeResults = (props) => {
  const [aStats, setAStats] = useState([])
  const [bStats, setBStats] = useState([])
  const [aPlayers, setAPlayers] = useState([]);
  const [bPlayers, setBPlayers] = useState([]);

  const getStats = async () => {
    let playersA = []
    let playersB = []
    props.players.map((player) => {
      if (player.team_Id === props.teamA_id){
        playersA.push(player)
      } else{
        playersB.push(player)
      }
    })
    setAPlayers(playersA)
    setBPlayers(playersB)
    const apiCall = aPlayers.reduce((acc, player) => {
      let plyId = player.api_Id.toString()
      acc += `player_ids[]=${plyId}&`
      return acc
    }, 'https://www.balldontlie.io/api/v1/season_averages?')
    const res = await (axios.get(`${apiCall}`))
    console.log(res.data.data)
    setAStats(res.data.data)
  }

  // also works when you didnt just refresh:
  // const getStats = () => {
  //   let one = `http://localhost:3001/api/players/${props.teamA_id}`
  //   let two = `http://localhost:3001/api/players/${props.teamB_id}`
  
  //   const requestOne = axios.get(one);
  //   const requestTwo = axios.get(two);
  
  //   axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
  //     const responseOne = responses[0]
  //     const responseTwo = responses[1]
  //     setAPlayers(responseOne.data.players)
  //     setBPlayers(responseTwo.data.players)
  //     let three = aPlayers.reduce((acc, player) => {
  //       let plyId = player.api_Id.toString()
  //       acc += `player_ids[]=${plyId}&`
  //       return acc
  //     }, 'https://www.balldontlie.io/api/v1/season_averages?')
  //     console.log(three)
  //   })).catch(errors => {
  //     console.log('error')
  //   })
  // }
  
  // WORKS WHEN YOU DIDNT JUST REFRESH:
  // const getStats = async () => {
  //   const resA = await axios.get(`http://localhost:3001/api/players/${props.teamA_id}`)
  //   // const resB = await axios.get(`http://localhost:3001/api/players/${props.teamB_id}`)
  //   setAPlayers(resA.data.players)
  //   // setBPlayers(resB.data.players)   
  //   console.log(resA.data.players)
  //   // console.log(resB.data.players)
  //   const apiCall = aPlayers.reduce((acc, player) => {
  //     let plyId = player.api_Id.toString()
  //     acc += `player_ids[]=${plyId}&`
  //     return acc
  //   }, 'https://www.balldontlie.io/api/v1/season_averages?')
  //   const res = await (axios.get(`${apiCall}`))
  //   console.log(res.data.data)
  // }

  // PLAN:
  // 1. Fix bug with the above api call returning an empty array after refreshing the page (it curr works if you comment out then save) (need to load the players prior to getting the stats; may need to refactor players state to be set much higher up in hierarchy and then pass it down to this component)
  // 2. Duplicate the process used to get aStats for bStats
  // 3. Write a new propiertary algorithm that compares bStats to aStats and determines the better trade package
  // 4. conditionally render the better team in the returned div j
  // 5. add explanation to the analysis

  useEffect( async () => {
    getStats()
  }, [props.params])
  
  return (
    <div>
      <h1>Analysis</h1>
      <h2>TeamA: {props.teamA_id}</h2>
    </div>
  )
}

export default TradeResults