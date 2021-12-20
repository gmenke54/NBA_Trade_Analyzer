import React, {useEffect} from "react";
import PlayerCard from "./PlayerCard";
import AddPlayer from "./AddPlayer";

const Roster = (props) => {
  const { setPlayers, players, setRenderResults } = props
  
  const delPlayer = (curPlyId) => {
    setPlayers(players.filter((player) => {
      setRenderResults(false)
      return player._id !== curPlyId

    }))
  }
  
  return (
    <div className="roster">
      <h2>Players:</h2>
      <AddPlayer 
        team_Id={props.team_Id} 
        players={players} 
        setPlayers={setPlayers} 
        setRenderResults={setRenderResults}
      />
      {players.map((player) => {
        {
          return (
            <PlayerCard
              key={player._id}
              name={player.name}
              _id={player._id}
              delPlayer={delPlayer}
              players={props.players}
              onClick={() => 
                props.history.push(`/players/details/${player.name}`)
              }
              />
          )
        }
      })}
    </div>
  )
}

export default Roster