import React from "react";
import ISSIntro from "./ISSIntro.js";
import WheresISS from "./WheresISS";
import WhenCanISee from "./WhenCanISee";
import "./ISS.css";


const ISS = (props) => {

  if (props.staticLocation !== undefined) {
    return (
      <div>
        <ISSIntro />
        <WheresISS staticLocation={props.staticLocation} />
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

export default ISS;
