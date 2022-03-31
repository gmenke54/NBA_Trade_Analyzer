import React, { useEffect, useState } from "react";
import axios from "axios";

const Scores = (props) => {
  const { players } = props
  const [pts, setPts] = useState(0);
  const [fgp, setFgp] = useState(0);
  const [ftp, setFtp] = useState(0);
  const [fg3m, setFg3m] = useState(0);
  const [reb, setReb] = useState(0);
  const [ast, setAst] = useState(0);
  const [st, setSt] = useState(0);
  const [blk, setBlk] = useState(0);
  const [turnOver, setTurnOver] = useState(0);

  useEffect( async () => {
    console.log(players)
    const apiCall = players.reduce((acc, player) => {
      let plyId = player.api_Id.toString()
      acc += `player_ids[]=${plyId}&`
      return acc
    }, 'https://www.balldontlie.io/api/v1/stats?start_date=2022-03-28&end_date=2022-03-30&')
    const res = await (axios.get(`${apiCall}`))
    // setStats(res.data.data)
    console.log(res.data.data)
    let ast_counter = 0
    let pts_counter = 0
    let fgm_counter = 0
    let fga_counter = 0
    let ftm_counter = 0
    let fta_counter = 0
    let fg3m_counter = 0
    let reb_counter = 0
    let st_counter = 0
    let blk_counter = 0
    let turnOver_counter = 0
    res.data.data.map((game) => {
      ast_counter+=game.ast
      pts_counter+=game.pts
      fgm_counter+=game.fgm
      fga_counter+=game.fga
      ftm_counter+=game.ftm
      fta_counter+=game.fta
      fg3m_counter+=game.fg3m
      reb_counter+=game.dreb + game.oreb
      st_counter+=game.stl
      blk_counter+=game.blk
      turnOver_counter+=game.turnover
    })
    setPts(pts_counter)
    setAst(ast_counter)
    setFgp(fgm_counter/fga_counter)
    setFtp(ftm_counter/fta_counter)
    setFg3m(fg3m_counter)
    setReb(reb_counter)
    setSt(st_counter)
    setBlk(blk_counter)
    setTurnOver(turnOver_counter)
  }, [])

  
  return (
    <div>
      <div>FG%: {fgp.toFixed(3)}</div>
      <div>FT%: {ftp.toFixed(3)}</div>
      <div>3PTM: {fg3m}</div>
      <div>Points: {pts}</div>
      <div>Rebounds: {reb}</div>
      <div>Assists: {ast}</div>
      <div>Steals: {st}</div>
      <div>Blocks: {blk}</div>
      <div>Turnovers: {turnOver}</div>
    </div>
  )
}

export default Scores