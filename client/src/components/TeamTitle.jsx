import React, { useEffect, useState } from "react";
import axios from "axios";

const TeamTitle = (props) => {
  const [updatedTeam, setUpdatedTeam] = useState({
    team_Name:``,
    manager_Name: props.manager_Name
  })
  const submit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/api/teams/details/${props.team_Id}`, {
      team_Name: updatedTeam.team_Name,
      manager_Name: updatedTeam.manager_Name
    })
    props.updateTeamName(props.team_Id, updatedTeam.team_Name)
    let anotherTeam = {
      team_Name:``,
      manager_Name: props.manager_Name
    }
    setUpdatedTeam(anotherTeam)    
  }
  const handleChange = (e) => {
    const newestTeam = { ...updatedTeam }
    newestTeam[e.target.id] = e.target.value
    setUpdatedTeam(newestTeam)
    console.log(newestTeam)
  }

  return (
    <section className="teamBoxTitle">
        <h1>{props.team_Name}</h1>
        <form className="updateTeamForm" onSubmit={(e) => submit(e)}>
        <input 
          type='text' 
          name='team_Name' 
          value={updatedTeam.team_Name} 
          onChange={(e) => handleChange(e)}
          id='team_Name'
          placeholder="update team name"
        />
        <button className="btn">Update</button>
      </form>
        <h3>Manager: {props.manager_Name}</h3>
        {/* <h5>{props.team_Id}</h5> */}
      </section>
  )
}

export default TeamTitle