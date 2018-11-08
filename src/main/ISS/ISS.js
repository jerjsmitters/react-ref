import React, {Component} from "react";
import ISSIntro from "./ISSIntro.js";
import WheresISS from "./WheresISS";
import WhenCanISee from "./WhenCanISee";
import "./ISS.css";


class ISS extends Component{

  render(){
    if (this.props.staticLocation !== undefined) {
      return (
        <div>
          <ISSIntro />
          <WheresISS staticLocation={this.props.staticLocation} />
          <WhenCanISee />
        </div>
      )

    }else {
      return(
        <div>
          <p>Please wait...</p>
        </div>
      )
    }

  }
}

export default ISS;
