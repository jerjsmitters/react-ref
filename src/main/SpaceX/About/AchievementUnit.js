import React from 'react';


function isItThere(textContent, key){
  return (key ? `${textContent}${key}` : null)
}


const AchievementUnit = (props) => {

  return(
    <ul>
      <li><h3>{isItThere('Flight Number: ', props.flightNumber)} {props.title} {props.utxDate.substring(11,16)} {props.utxDate.substring(0,10)}</h3></li>
      <li>Details: {props.details}</li>
      <li>Read more: {props.wiki} and {props.guardian}</li>
      <li>{isItThere('Discussion: ', props.reddit)}</li>
    </ul>
  )
}

export default AchievementUnit;
