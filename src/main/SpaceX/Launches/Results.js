import React from 'react';
import ResultUnit from './ResultUnit';

let resultArr = 'loading';

const Results = (props) => {
  function launchMap (arr){
    return arr.map(result =>
      <ResultUnit flight_number={result.flight_number}
                  launch_date_utc={result.launch_date_utc}
                  showLaunchStateChanger={props.showLaunchStateChanger} />)
    }

  function applyStaticFilter (arr, filter){
    switch (filter){
      case 'successful':
        return arr.filter(launch => launch.launch_success === true);
      case 'unsuccessful':
        return arr.filter(launch => launch.launch_success === false);
      case 'past':
        return arr.filter(launch => launch.launch_date_unix < Date.now()/1000);
      case 'future':
        return arr.filter(launch => launch.launch_date_unix > Date.now()/1000);
      case 'na':
        return arr;
      }
  }

  function applyDynamicFilter (arr, filterType, filter){
    switch(filterType){
      case 'payload':
        return arr.filter(launch => launch.rocket.second_stage.payloads[0].payload_type === filter);
      case 'core':
        return arr.filter(launch => launch.rocket.first_stage.cores[0].core_serial === filter);
      case 'rocket':
        return arr.filter(launch => launch.rocket.rocket_name === filter);
      case 'na':
        return arr;
    }
  }


  if (props.allLaunches){
    resultArr = launchMap(props.allLaunches);
    if (props.mainLaunchState.staticFilter){
      const resultArrStatic = applyStaticFilter(props.allLaunches, props.mainLaunchState.staticFilterVal);
      resultArr = launchMap(resultArrStatic);
    } else if (props.mainLaunchState.dynamicFilter){
      const resultArrDynamic = applyDynamicFilter(props.allLaunches,props.mainLaunchState.filterType, props.mainLaunchState.dynamicFilterVal);
      resultArr = launchMap(resultArrDynamic);
    }
  }


  return(
    <div id="results">
      {resultArr}
    </div>
  )
}

export default Results;
