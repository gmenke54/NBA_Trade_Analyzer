import React, { useEffect, useState } from "react";
import axios from "axios";
import Roster from "./Roster";

import AddTeam from "./AddTeam";
import TeamTitle from "./TeamTitle";


const TeamBox = (props) => {
  const { teams, setTeams } = props
  const [players, setPlayers] = useState([]);
  const [teamCreated, setTeamCreated] = useState(false)

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
    getPlayers();
  }, [])

  const getPlayers = async () => {
    const res = await axios.get(`http://localhost:3001/api/players/${props.team_Id}`)
    setPlayers(res.data.players)
  }
  
  return (
    <div>
      <AddTeam  teams={teams} setTeams={setTeams} />
      <TeamTitle updateTeamName={updateTeamName} team_Name={props.team_Name} manager_Name={props.manager_Name} team_Id={props.team_Id} />
      <Roster team_Id={props.team_Id} players={players} setPlayers={setPlayers} />
    </div>
  )
}

export default TeamBox