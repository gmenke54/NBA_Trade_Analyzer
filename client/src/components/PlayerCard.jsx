import React from "react";
import axios from "axios";

const PlayerCard = (props) => {
  const deletePlayer = () => {
    axios.delete(`http://localhost:3001/api/players/details/${props._id}`);
    // DO THIS WITHOUT RELOADING THE WHOLE PAGE:
    window.location.reload()
  }

  return (
    <div className="playerCard">
      <h3>{props.name}</h3>
      <button onClick={deletePlayer}>DEL</button>
    </div>
  )
}

export default PlayerCard