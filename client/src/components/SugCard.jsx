import React, { useEffect } from "react";
import axios from "axios";

const SugCard = (props) => {

  return (
    <div className="sugCard" onClick={props.onClick}>
      <h5>{props.fName} {props.lName} - {props.team}</h5>
    </div>
  )
}

export default SugCard