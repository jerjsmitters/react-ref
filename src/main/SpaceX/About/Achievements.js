import React from 'react';
import AchievementUnit from './AchievementUnit.js';


const Achievements = (props) => {
  let achieveArray;


  if (props.achievements){achieveArray = props.achievements.map(achievement =>
      <AchievementUnit key = {achievement.id}
                    title = {achievement.title}
                    utxDate = {achievement.event_date_utc}
                    details = {achievement.details}
                    flightNumber = {achievement.flight_number}
                    wiki = {achievement.links.wikipedia}
                    guardian = {achievement.links.article}
                    reddit ={achievement.links.reddit}/>
                  )
                } else{
                    achieveArray=<h1>Please wait...</h1>
                  }

  return(
    <div>
      {achieveArray}
    </div>
  )
}

export default Achievements;
