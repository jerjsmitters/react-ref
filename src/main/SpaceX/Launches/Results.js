import React from 'react';
import ResultUnit from './ResultUnit';

let resultArr = 'loading';



const Results = (props) => {
  function launchMap (arr){
    resultArr = arr.map(result =>
      <ResultUnit flight_number={result.flight_number}
                  launch_date_utc={result.launch_date_utc}
                  showLaunchStateChanger={props.showLaunchStateChanger} />)
    }
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
