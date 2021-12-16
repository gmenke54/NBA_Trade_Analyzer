import React from "react";
import PlayerCard from "./PlayerCard";

const Roster = (props) => {
  return (
    <div className="roster">
      <h2>Players:</h2>
      {props.players.map((player) => {
        {
          return (
            <PlayerCard
              key={player._id}
              name={player.name}
              _id={player._id}
              />
          )
        }
      })}
    </div>
  )
}

export default Roster