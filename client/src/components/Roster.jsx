import React, {useEffect, useState} from "react";
import PlayerCard from "./PlayerCard";
import AddPlayer from "./AddPlayer";

const Roster = (props) => {
  const { setPlayers, players, setRenderResults } = props
  const [ renderAddPlayer, setRenderAddPlayer ] = useState(false)
  
  const delPlayer = (curPlyId) => {
    setPlayers(players.filter((player) => {
      setRenderResults(false)
      return player._id !== curPlyId
    }))
  }
  
  useEffect(() => {
  }, [renderAddPlayer])

  const togAddPlayer = () => {
    if (setRenderAddPlayer === true){
      setRenderAddPlayer(false)
    } else {
      setRenderAddPlayer(true)
    }
  }
  
  return (
    <div className="rosterCont">
      <div className="roster">
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
                  props.history.push(`players/details/${player.name}`)
                }
                />
            )
          }
        })}
      </div>
      <div>
        {renderAddPlayer===true ? (
          <div>
            <AddPlayer 
              team_Id={props.team_Id} 
              players={players} 
              setPlayers={setPlayers} 
              setRenderResults={setRenderResults}
              togAddPlayer={togAddPlayer}
              setRenderAddPlayer={setRenderAddPlayer}
            />
          </div>
        ) : (
          <div className="addBtn" onClick={togAddPlayer}>+</div>
        )}
      </div>

    </div>
  )
}

export default Roster