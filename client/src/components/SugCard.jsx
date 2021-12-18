import React, { useEffect } from "react";
import axios from "axios";

const SugCard = (props) => {

  return (
    <div className="sugCard">
      <h5>{props.fName} {props.lName} - {props.pos}</h5>
    </div>
  )
}

export default SugCard