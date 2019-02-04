import React from 'react';


const AchievementUnit = (props) => {

  return(
    <ul id="achievementUL">
      <li id="achievementTitle"><h1>{props.title}  {props.utxDate.substring(0,10)} {props.utxDate.substring(11,16)}</h1></li>
      <li>{props.details}</li>
      <li>Read more:
      {(props.wiki) ? (<a href={props.wiki}>Wikipedia</a>) : null}
      {(props.guardian) ? (<a href={props.guardian}>Guardian</a>) : null}
      {(props.reddit) ? (<a href={props.reddit}>Reddit</a>) : null}
      </li>
    </ul>
  )
}

export default AchievementUnit;
