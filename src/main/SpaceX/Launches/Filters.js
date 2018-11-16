import React from 'react';




const Filters = (props) => {
  //successful, unsuccessful, type of payload, rocket_id, past, future, recovered
  //asc or desc

  function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

  let rocketsPreSort;
  let rocketsSorted;
  let rocketsFilterArr;
  if (props.allLaunches){
    rocketsPreSort = props.allLaunches.map(launch => launch.rocket.rocket_name);
    rocketsSorted = removeDuplicates(rocketsPreSort);
    rocketsFilterArr = rocketsSorted.map(rocket => <option value={rocket}>{rocket}</option>)
  } else{
    rocketsFilterArr = <option>loading</option>
  }

  let payloadPreSort;
  let payloadSorted;
  let payloadFilterArr;

  if (props.allLaunches){
    payloadPreSort = props.allLaunches.map(launch => launch.rocket.second_stage.payloads[0].payload_type);
    payloadSorted = removeDuplicates(payloadPreSort);
    payloadFilterArr = payloadSorted.map(payload => <option value={payload}>{payload}</option>)
  } else{
    payloadFilterArr = <option>loading</option>
  }

  return(
    <div id="filters">
      <p>Launch Catalogue</p>
      <span>Filter by:</span>
      <select name="success">
        <option value="successful">Successful</option>
        <option value="unsuccessful">unsuccessful</option>
      </select>
      <select name="time">
        <option value="past">Past</option>
        <option value="future">Future</option>
      </select>
      <select name="Recovered">
        <option value="recovered">Recovered</option>
        <option value="unrecovered">Unrecovered</option>
      </select>
      <select name="rocketName">
        {rocketsFilterArr}
      </select>
      <select name="payloadName">
        {payloadFilterArr}
      </select>
    </div>
  )
}

export default Filters;
