import React from 'react';
import AboutSpaceX from './AboutSpaceX.js'
import AchievementsTL from './AchievementsTL.js';
import Missions from './Missions.js';
import './about.css';
const About = (props) => {

  if (props.about){
    return(
      <div id = 'aboutContainer'>
        <div id='twoCol'>
          <AboutSpaceX info={props.about.companyInfo}/>
          <Missions missions={props.about.missions}/>
        </div>
        <AchievementsTL achievements={props.about.history}/>

      </div>
    )
  }else{
    return(
      <h1>Please wait...</h1>
    )
  }
}

export default About;
