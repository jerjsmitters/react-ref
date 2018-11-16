import React from 'react';

const ResultUnit = (props) => {

  return(
    <div className="resultUnit">
      <p>{props.flight_number} <br/> {props.launch_date_utc}</p>
    </div>
  )
}

export default ResultUnit;
