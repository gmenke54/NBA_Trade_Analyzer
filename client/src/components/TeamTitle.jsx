import React from "react";
import axios from "axios";

const TeamTitle = (props) => {
  // const deletePlayer = () => {
  //   axios.delete(`http://localhost:3001/api/players/details/${props._id}`);
  //   // DO THIS WITHOUT RELOADING THE WHOLE PAGE:
  //   window.location.reload()
  // }

  return (
    <section className="teamBoxTitle">
        <h1>{props.team_Name}</h1>
        <h3>{props.manager_Name}</h3>
        <h5>{props.team_Id}</h5>
      </section>
  )
}

export default TeamTitle