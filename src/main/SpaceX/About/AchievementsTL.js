import React, {Component} from 'react';
import AchievementTLUnit from './AchievementTLUnit.js';
import Slider from "react-slick";


class AchievementsTL extends Component{
  render(){
    let achieveArray;
    if (this.props.achievements){achieveArray = this.props.achievements.map(achievement =>
        <AchievementTLUnit key = {achievement.id}
                      title = {achievement.title}
                      utxDate = {achievement.event_date_utc}/>
                    )
                  } else{
                      achieveArray=<h1>Please wait...</h1>
                    }

    const settings = {
         dots: false,
         focusOnSelect: true,
         speed: 800,
         slidesToShow: 6,
         edgeFriction: 0,
         swipeToSlide: true,
         rtl: true,
         infinite: false,
         arrows: false

       };
    return(
      <div id="achCont">
        <h1>Company Milestones</h1>
        <div id="timelineCont">
          <Slider {...settings}>
            {achieveArray}
          </Slider>
        </div>
      </div>
    )
  }
}

export default AchievementsTL;
