import React, { useEffect, useState } from "react";
import axios from "axios";
import Roster from "./Roster";


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
      <section className="teamBoxTitle">
      <h1>{props.team_Name}</h1>
      <h3>{props.manager_Name}</h3>
      <h5>{props.team_Id}</h5>
      </section>
      <Roster players={players}/>
    </div>
  )
}

export default TeamBox