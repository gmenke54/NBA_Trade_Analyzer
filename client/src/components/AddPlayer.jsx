import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPlayer = (props) => {
  const { players, setPlayers } = props
  const [newPlayer, setNewPlayer] = useState({
    name:``,
    team_Id: props.team_Id
  })

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3001/api/players`, {
      name: newPlayer.name,
      team_Id: newPlayer.team_Id
    })
    
    const res = await axios.get(`http://localhost:3001/api/players`)
    const allPlayers = res.data.players
    const teamPlayers = allPlayers.filter((player) => {
      return player.team_Id === props.team_Id
    })
    setPlayers(teamPlayers)

    let anotherPlayer = {
      name: ``,
      team_Id: props.team_Id
    }
    setNewPlayer(anotherPlayer)
  }
  const handleChange = (e) => {
    const newestPlayer = { ...newPlayer }
    newestPlayer[e.target.id] = e.target.value
    setNewPlayer(newestPlayer)
    console.log(newestPlayer)
  }

  return (
    <div className="addPlayer">
      <form onSubmit={(e) => submit(e)}>
        <input 
          type='text' 
          name='name' 
          value={newPlayer.name} 
          onChange={(e) => handleChange(e)}
          id='name'
          placeholder="enter player name"
        />
        <button className="btn">Add</button>
      </form>
    </div>
  )
}

export default AddPlayer