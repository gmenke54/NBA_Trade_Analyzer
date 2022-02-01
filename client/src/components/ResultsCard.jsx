import React, { useEffect, useState } from "react";
import axios from "axios";
import Analysis from "./Analysis";

const TradeResults = (props) => {
  const { aPlayers, bPlayers } = props
  const [aStats, setAStats] = useState([])
  const [bStats, setBStats] = useState([])

  useEffect( async () => {
    const apiCall = aPlayers.reduce((acc, player) => {
      let plyId = player.api_Id.toString()
      acc += `player_ids[]=${plyId}&`
      return acc
    }, 'https://www.balldontlie.io/api/v1/season_averages?', {
      headers: {"Access-Control-Allow-Origin": "*"}
    })
    const res = await (axios.get(`${apiCall}`))
    const apiCall2 = bPlayers.reduce((acc, player) => {
      let plyId = player.api_Id.toString()
      acc += `player_ids[]=${plyId}&`
      return acc
    }, 'https://www.balldontlie.io/api/v1/season_averages?', {
      headers: {"Access-Control-Allow-Origin": "*"}
    })
    const res2 = await (axios.get(`${apiCall2}`))
    setAStats(res.data.data)
    setBStats(res2.data.data)
  }, [aPlayers, bPlayers])

  
  return (
    <div>
      {aStats !== [] && bStats !== [] ? (
        <div>
        <Analysis 
          aStats={aStats} 
          bStats={bStats} 
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
      ) :(
        <div>
          Loading Players...
        </div>
      )}
    </div>
  )
}

export default TradeResults