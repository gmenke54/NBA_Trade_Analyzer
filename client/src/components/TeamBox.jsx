import React, { useEffect, useState } from "react";
import axios from "axios";
import Roster from "./Roster";


import TeamTitle from "./TeamTitle";


const TeamBox = (props) => {
  const { teams, setTeams } = props
  const [curPlayers, setCurPlayers] = useState([])
  // const [players, setPlayers] = useState([]);

  const getCurPlayers = () => {
    let playersCur = []
    props.players.map((player) => {
      if (player.team_Id === props.team_Id){
        playersCur.push(player)
      }
    })
    setCurPlayers(playersCur)
  }

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
    getCurPlayers();
  }, [])

  // const getPlayers = async () => {
  //   const res = await axios.get(`http://localhost:3001/api/players/${props.team_Id}`)
  //   setPlayers(res.data.players)
  // }

  return (
    <div>
      <TeamTitle updateTeamName={updateTeamName} team_Name={props.team_Name} manager_Name={props.manager_Name} team_Id={props.team_Id} />
      <Roster {...props} team_Id={props.team_Id} players={curPlayers} setPlayers={props.setCurPlayers} />
    </div>
  )
}

export default TeamBox