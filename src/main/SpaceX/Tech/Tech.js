import React, {Component} from 'react';
import TechIntro from './TechIntro.js';
import Capsules from './Capsules.js';
import LaunchPads from './LaunchPads.js';
import LandingPads from './LandingPads.js';
import Payloads from './Payloads.js';
import Cores from './Cores.js';

class Tech extends Component {
  render(){

    return(
      <div id="techCont" class="mainContainer">
        <TechIntro/>
        <div id="techMain">
          <div id="howDoWeGetThere">
            <LaunchPads launchPads={this.props.tech.launchPads}/>
            <Cores cores={this.props.tech.cores} />
          </div>
          <div id="howDoWeSurvive">
            <Capsules capsules={this.props.tech.capsules} />
          </div>
          <div id="whatDoWeBring">
            <Payloads payLoads={this.props.tech.payLoads} />
          </div>
          <div id="howDoWeGetBack">
            <LandingPads landingPads={this.props.tech.landingPads} />
          </div>
        </div>
      </div>
    )
  }
}
export default Tech;
