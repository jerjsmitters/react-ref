import React from 'react';

const ResultUnit = (props) => {

  return(
    <div className="resultUnit" onClick={()=>props.showLaunchStateChanger(props.flight_number)}>
      <p id="launchNumber">Launch #{props.flight_number}</p>
      <p id="launchDate">{props.launch_date_utc.substring(2,4)}/{props.launch_date_utc.substring(5,7)}/{props.launch_date_utc.substring(2,4)}</p>
    </div>
  )
}

export default ResultUnit;
