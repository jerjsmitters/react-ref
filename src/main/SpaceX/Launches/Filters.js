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
  let payloadPreSort;
  let payloadSorted;
  let payloadFilterArr;
  let coresPreSort;
  let coresSorted;
  let coresFilterArr;
  let mrval = true
  if (props.allLaunches && mrval){
    rocketsPreSort = props.allLaunches.map(launch => launch.rocket.rocket_name);
    rocketsSorted = removeDuplicates(rocketsPreSort);
    rocketsFilterArr = rocketsSorted.map(rocket => <option value={rocket}>{rocket}</option>)

    payloadPreSort = props.allLaunches.map(launch => launch.rocket.second_stage.payloads[0].payload_type);
    payloadSorted = removeDuplicates(payloadPreSort);
    payloadFilterArr = payloadSorted.map(payload => <option value={payload}>{payload}</option>)

    coresPreSort = props.allLaunches.map(launch => launch.rocket.first_stage.cores[0].core_serial);
    coresSorted = removeDuplicates(coresPreSort);
    coresFilterArr = coresSorted.map(cores => <option value={cores}>{cores}</option>)

    // props.getDynamicFilters('hello')
    mrval=false;
// {rockets: rocketsFilterArr, payloads: payloadFilterArr, cores: coresFilterArr})
  } else{
    rocketsFilterArr = <option>loading</option>
    payloadFilterArr = <option>loading</option>
    coresFilterArr = <option>loading</option>
  }


  return(
    <div id="filters">
      <p>Launch Catalogue</p>
      <span>Filter by:</span>
      <select name="success">
        <option value="na">-</option>
        <option value="successful">Successful</option>
        <option value="unsuccessful">unsuccessful</option>
      </select>
      <select name="time">
        <option value="na">-</option>
        <option value="past">Past</option>
        <option value="future">Future</option>
      </select>
      <select name="Recovered">
        <option value="na">-</option>
        <option value="recovered">Recovered</option>
        <option value="unrecovered">Unrecovered</option>
      </select>
      <select name="rocketName">
        <option value="na">-</option>
        {rocketsFilterArr}
      </select>
      <select name="payloadName">
        <option value="na">-</option>
        {payloadFilterArr}
      </select>
      <select name="coresName">
        <option value="na">-</option>
        {coresFilterArr}
      </select>
    </div>
  )
}

export default Filters;
