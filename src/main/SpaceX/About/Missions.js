import React, {Component} from 'react';
import MissionUnit from './MissionUnit.js';
import MissionMenu from './MissionMenu.js';

class Missions extends Component {


  constructor(){
    super();
    this.state = {menu: true, m0:false, m1: false, m2: false, m3: false, m4: false, m5: false, m6: false, m7: false, m8: false, m9: false};
    this.handleMissionState = this.handleMissionState.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  handleMissionState(mission){
    const resetState = {menu: false, m0: false, m1: false, m2: false, m3: false, m4: false, m5: false, m6: false, m7: false, m8: false, m9: false};
    this.setState(resetState, ()=> this.setState({[mission]: true}))
  }

  handleBackButton(){
    const initState = {menu: true, m0: false, m1: false, m2: false, m3: false, m4: false, m5: false, m6: false, m7: false, m8: false, m9: false}
    this.setState(initState)
  }



  render(){
    let missionArray;
    let missionNames;
    let displayedMission = <h1>Loading...</h1>; //Before props come in

    if (this.props.missions){ //Once props come in
      missionArray = this.props.missions.map(mission => //Contains all 10 of missions
        <MissionUnit key = {mission.mission_id}
                      mission_name = {mission.mission_name}
                      manufacturers = {mission.manufacturers}
                      payload_ids = {mission.payload_ids}
                      wikipedia = {mission.wikipedia}
                      twitter = {mission.twitter}
                      description = {mission.description}
                      backButton = {this.handleBackButton}
                      />
                    );
                    missionNames = this.props.missions.map(mission => mission.mission_name)

                    if(this.state.menu){displayedMission = <MissionMenu missions = {this.props.missions}
                                                                        missionState = {this.handleMissionState}
                                                                        missionNames = {missionNames}/>}
                    else if (this.state.m0) {displayedMission = missionArray[0]}
                    else if (this.state.m1) {displayedMission = missionArray[1]}
                    else if (this.state.m2) {displayedMission = missionArray[2]}
                    else if (this.state.m3) {displayedMission = missionArray[3]}
                    else if (this.state.m4) {displayedMission = missionArray[4]}
                    else if (this.state.m5) {displayedMission = missionArray[5]}
                    else if (this.state.m6) {displayedMission = missionArray[6]}
                    else if (this.state.m7) {displayedMission = missionArray[7]}
                    else if (this.state.m8) {displayedMission = missionArray[8]}
                    else if (this.state.m9) {displayedMission = missionArray[9]}
                  }



    return(
      <div id="missionCont">
      {displayedMission}
      </div>
    )
  }

}


export default Missions;
