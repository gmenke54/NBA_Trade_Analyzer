import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPlayer = (props) => {
  const [newPlayer, setNewPlayer] = useState({
    name:``,
    team_Id: props.team_Id
  })
  const submit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/api/players`, {
      name: newPlayer.name,
      team_Id: newPlayer.team_Id
    })
    let anotherPlayer = {
      name: ``
    }
    setNewPlayer(anotherPlayer)
    // DO THIS WITHOUT RELOADING THE WHOLE PAGE:
    window.location.reload()
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