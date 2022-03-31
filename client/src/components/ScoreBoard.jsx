import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/TeamBox.css'
import TeamTitle from "./TeamTitle";
import Scores from "./Scores"

import { BASE_URL } from '../globals'

const ScoreBoard = (props) => {
  const { teams, setTeams } = props
  const [players, setPlayers] = useState(null)
  const [stats, setStats] = useState([])

  useEffect(() => {
    getPlayers()
  }, [])

  const getPlayers = async () => {
    const res = await axios.get(`${BASE_URL}/players/${props.team_Id}`)
    setPlayers(res.data.players)
  }

  return (
    <div className="teamBox">
      <TeamTitle team_Name={props.team_Name} manager_Name={props.manager_Name} team_Id={props.team_Id} displayTitle={props.displayTitle} />
      <div>
        {players ? (
          <div>
            <Scores {...props} team_Id={props.team_Id} players={players} setPlayers={setPlayers} />
          </div>
        ):(null)}
      </div>
    </div>
  )
}

export default ScoreBoard