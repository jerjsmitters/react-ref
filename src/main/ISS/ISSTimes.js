import React from 'react';



const ISSTimes = (props) => {
  return(
    <li>
      Estimated time of appearance: {props.convert(props.beginTime)} <br />
      Estimated duration of visibility: {props.duration} seconds
    </li>
  )
}

export default ISSTimes;
