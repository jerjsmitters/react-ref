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
    launchMap(props.allLaunches);
  }
  //1) event listener assigned to dropdowns to change of mainlaunch state,
  //2) mainlaunch passes state as prop Results.
  //3) construct functions in Results that filter for a given filter option.
  //4) this function should be wrapped in a conditional so the func is called when filter applied

  function applyFilter (arr, filter){
    switch (filter){
      case 'successful':
        return arr.filter(launch => launch.launch_success === true);
      case 'unsuccessful':
        return arr.filter(launch => launch.launch_success === false);
      case 'past':
        return arr.filter(launch => launch.launch_date_unix < Date.now());
      case 'future':
        return arr.filter(launch => launch.launch_date_unix > Date.now());
      case 'recovered':
        return arr.filter(launch => launch.rocket.fairings.recovered === true);
      case 'unrecovered':
        return arr.filter(launch => launch.rocket.fairings.recovered === false && launch.launch_date_unix < Date.now());
    }
  }

  return(
    <div id="results">
      {resultArr}
    </div>
  )
}

export default Results;
