import React, {Component} from 'react';
import UpcomingLaunches from './UpcomingLaunches.js';
import AllLaunches from './AllLaunches.js';
import PastLaunches from './PastLaunches';

class MainLaunch extends Component {

  render(){
    return(
      <div id="mainLaunch">
        All launches (can filter all, past or future)
        <AllLaunches allLaunches={this.props.allLaunches}/>
        <PastLaunches pastLaunches={this.props.pastLaunches}/>
        <UpcomingLaunches upcomingLaunches={this.props.upcomingLaunches}/>
      </div>
    )
  }
}

export default MainLaunch;
