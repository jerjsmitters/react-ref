import React from "react";
import CurrentAct from "./CurrentAct";
import ISS from "./ISS/ISS";
const Present = (props) => {
  return (
    <div>
      <ISS staticLocation = {props.staticLocation}/>
      <CurrentAct/>
    </div>
  )
}

export default Present;
