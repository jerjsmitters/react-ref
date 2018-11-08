import React from 'react';

const ISSTimes = (props) => {
  return(
    <li>
      Estimated time of appearance: {props.beginTime} <br />
      Estimated duration of visibility: {props.duration}
    </li>
  )
}

export default ISSTimes;
