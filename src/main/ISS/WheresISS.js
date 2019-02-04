import React from 'react';
import SimpleExample from './SimpleExample';

const WheresISS = (props) => {
  return(
    <div id="wheresISS">
      <h1>Where in the world is the ISS?!</h1>
        <p id="wheresISSPos">
          Latitude: {props.staticLocation.latitude} deg <br/>
          Longitude: {props.staticLocation.longitude} deg <br/>
          Accurate at: {props.convert(props.timestamp)}
        </p>

        <SimpleExample  lat={props.staticLocation.latitude}
                        long={props.staticLocation.longitude}/>
    </div>
  )
}


export default WheresISS;
