import React, { useEffect } from "react";
import axios from "axios";

const PlayerCard = (props) => {
  
  const deletePlayer = async () => {
    await axios.delete(`http://localhost:3001/api/players/details/${props._id}`);
    props.delPlayer(props._id)
  }

  return (
    <div className="playerCard">
      <h3 onClick={props.onClick}>{props.name}</h3>
      <button onClick={deletePlayer}>DEL</button>
    </div>
  )
}

export default PlayerCard