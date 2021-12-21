import React, { useEffect, useState } from "react";


const SugCardDisp = (props) => {
  const [personId, setPersonId] = useState(null)

  useEffect( async () => {
    props.curPlayers.map((player) => {
      if (props.lName === player.lastName && props.fName === player.firstName){
        setPersonId(`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`)
      } 
    })
  }, [props.curPlayers])


  return (
    <div>
      {personId ? (
        <div className='sugCard' onClick={props.onClick}>
          <img className="sugPics" src={personId} />
          <h5>{props.fName} {props.lName} - {props.team}</h5>
        </div>
      ) : (
        null
      )}
    </div>
    
  )
}

export default SugCardDisp