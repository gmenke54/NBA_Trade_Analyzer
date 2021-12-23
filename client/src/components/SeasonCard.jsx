import axios from "axios";
import React, { useEffect, useState } from "react";

const SeasonCard = (props) => {
  const [stats, setStats] = useState(null)

  const getStats = async () => {
    const res = await axios.get(
      `https://www.balldontlie.io/api/v1/season_averages?season=${props.season}&player_ids[]=${props.id}`
    )
    console.log(res.data.data[0])
    setStats(res.data.data[0])
  }

  let seasEnd = (props.season -1999)
  if (seasEnd<10){
    seasEnd = `0${seasEnd}`
  }

  useEffect(() => {
    getStats()
  }, [props.match.params.name])

  if (stats){
    return (
      <div className="statsLine">
          <div>{stats.season}-{seasEnd}</div>
          <div>{stats.games_played}</div>
          <div>{stats.min}</div>
          <div>{stats.fg_pct.toFixed(3)}</div>
          <div>{stats.ft_pct.toFixed(3)}</div>
          <div>{stats.fg3m.toFixed(1)}</div>
          <div>{stats.pts.toFixed(1)}</div>
          <div>{stats.reb.toFixed(1)}</div>
          <div>{stats.ast.toFixed(1)}</div>
          <div>{stats.stl.toFixed(1)}</div>
          <div>{stats.blk.toFixed(1)}</div>
          <div>{stats.turnover.toFixed(1)}</div>
      </div>
    )
  } else {
    return (
      null
    )
  }
  
}

export default SeasonCard