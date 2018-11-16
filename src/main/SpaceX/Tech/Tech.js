import React, {Component} from 'react';
import TechIntro from './TechIntro.js';
import Capsules from './Capsules.js';
import LaunchPads from './LaunchPads.js';
import LandingPads from './LandingPads.js';
import Payloads from './Payloads.js';
import Cores from './Cores.js';
import './tech.css';

class Tech extends Component {
  render(){

    return(
      <div id="techCont" class="mainContainer">
        <TechIntro/>
        <div id="techCol">
          <Cores cores={this.props.tech.cores} />
          <Capsules capsules={this.props.tech.capsules} />
          <Payloads payLoads={this.props.tech.payLoads} />
          <div id="pads">
            <LaunchPads launchPads={this.props.tech.launchPads}/>
            <LandingPads landingPads={this.props.tech.landingPads} />
          </div>
        </div>
      </div>
    )
  }
}
export default Tech;
