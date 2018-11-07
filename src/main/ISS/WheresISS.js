import React from 'react';
import SimpleExample from './SimpleExample';

const WheresISS = (props) => {
  return(
    <div id="wheresISS">
      <h2>So, where is it right now?</h2>
        <p>
          Latitude: {props.staticLocation.latitude} deg <br/>
          Longitude: {props.staticLocation.longitude} deg <br/>
          <span>It is currently flying over: </span> <br/>
          At time:
        </p>

        <SimpleExample  lat={props.staticLocation.latitude}
                        long={props.staticLocation.longitude}/>
    </div>
  )
}


export default WheresISS;
