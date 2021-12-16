import React, { useEffect, useState } from "react";
import axios from "axios";
import Roster from "./Roster";
import AddPlayer from "./AddPlayer";
import AddTeam from "./AddTeam";
import TeamTitle from "./TeamTitle";


const TeamBox = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers();
  }, [])

  const getPlayers = async () => {
    const res = await axios.get(`http://localhost:3001/api/players/${props.team_Id}`)
    console.log(props.manager_Name)
    console.log(res.data.players)
    setPlayers(res.data.players)
  }
  
  return (
    <div>
      <AddTeam />
      <TeamTitle team_Name={props.team_Name} manager_Name={props.manager_Name} team_Id={props.team_Id} />
      <AddPlayer team_Id={props.team_Id}/>
      <Roster players={players}/>
    </div>
  )
}

export default TeamBox