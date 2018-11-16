import React from 'react';
import ResultUnit from './ResultUnit';

let resultArr = 'loading';

function launchMap (arr){
  resultArr = arr.map(result =>
    <ResultUnit flight_number={result.flight_number} launch_date_utc={result.launch_date_utc}/>)
  }

const Results = (props) => {

  if (props.allLaunches){
    launchMap(props.allLaunches)
  }

  return(
    <div id="results">
    {resultArr}
    </div>
  )
}

export default Results;
