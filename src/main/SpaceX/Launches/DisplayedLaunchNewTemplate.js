import React from 'react';
import PastLaunchTemplate from './PastLaunchTemplate';
import FutureLaunchTemplate from './FutureLaunchTemplate';

let chosenLaunch;

const DisplayedLaunchNewTemplate = (props) => {
  if(props.activeState){
    let index = props.activeState.substring(1);
    index = parseInt(index);
    let chosenLaunch = props.allLaunches[index-1];
    if (!chosenLaunch.upcoming){
      return(
        <PastLaunchTemplate pl={chosenLaunch}
                            payloadPopulator={props.payloadPopulator}
                            setInitState={props.setInitState}
                            imagePopulator={props.imagePopulator}/>
      )
    }else{
      return(
        <FutureLaunchTemplate ft={chosenLaunch}
                            payloadPopulator={props.payloadPopulator}
                            setInitState={props.setInitState}/>
      )
    }

  } else{
    return(null)
  }


}

export default DisplayedLaunchNewTemplate;
