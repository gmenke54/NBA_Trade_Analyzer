import React, { useEffect, useState } from "react";
import axios from "axios";
import Roster from "./Roster";
import '../css/TeamBox.css'
import TeamTitle from "./TeamTitle";

import { BASE_URL } from '../globals'

const TeamBox = (props) => {
  const { teams, setTeams } = props
  const [players, setPlayers] = useState([])

  const updateTeamName = (curTeamId, updatedName) => {
    let changedTeam = teams.find((team) => {
      return team._id === curTeamId;
    });
    let index = teams.map((team, i) => {
      if (team._id === curTeamId) {
        return i;
      }
    });
    changedTeam.team_Name = updatedName;
    setTeams(teams.splice(index, 2, changedTeam));
  };

  useEffect(() => {
    getPlayers()
  }, [])

  const getPlayers = async () => {
    const res = await axios.get(`${BASE_URL}/players/${props.team_Id}`)
    setPlayers(res.data.players)
  }

  return (
    <div className="teamBox">
      <TeamTitle updateTeamName={updateTeamName} team_Name={props.team_Name} manager_Name={props.manager_Name} team_Id={props.team_Id} displayTitle={props.displayTitle} />
      <Roster {...props} team_Id={props.team_Id} players={players} setPlayers={setPlayers} setRenderResults={props.setRenderResults} />
    </div>
  )
}

export default TeamBox