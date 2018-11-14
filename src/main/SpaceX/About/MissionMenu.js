import React from 'react';
import {Link} from 'react-router-dom';
const MissionMenu = (props) => {
  let buttons;
  if(props.missionNames){
    buttons = props.missionNames.map(missionName=>

      <button onClick={()=>props.missionState('m'+props.missionNames.indexOf(missionName).toString())}>{missionName}</button>)}
      console.log(buttons)
  return(
    <div>
      {buttons}
    </div>
  )
}

export default MissionMenu;
