import React, {Component} from 'react';
import LaunchIntro from './LaunchIntro.js';
import MainLaunch from './MainLaunch.js';
import NextLaunch from './NextLaunch.js';
import LatestLaunch from './LatestLaunch.js';
import "./launches.css";
class Launches extends Component{


  render(){

    return(
      <div id="launchCont" class="mainContainer">
        <LaunchIntro /> {/*always mounted at top*/}
        <div id = "launchCol">
          <LatestLaunch latestLaunch={this.props.launches.latestLaunch}/>

          <MainLaunch allLaunches={this.props.launches.allLaunches}
                      pastLaunches={this.props.launches.pastLaunches}
                      upcomingLaunches = {this.props.launches.upcomingLaunches}/> {/*upc, past and all launches*/}
          <NextLaunch nextLaunch={this.props.launches.nextLaunch}/> {/*These two are always mounted to the left and right*/}

        </div>
      </div>
    )
  }
}


export default Launches;
