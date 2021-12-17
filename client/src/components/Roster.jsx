import React, {useEffect} from "react";
import PlayerCard from "./PlayerCard";

const Roster = (props) => {
  const { setPlayers, players } = props
  const delPlayer = (curPlyId) => {
    setPlayers(players.filter((player) => {
      return player._id !== curPlyId
    }))
  }
  
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
              delPlayer={delPlayer}
              players={props.players}
              />
          )
        }
      })}
    </div>
  )
}

export default Roster