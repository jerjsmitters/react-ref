import React from 'react';


const AchievementTLUnit = (props) => {

  return(
      <div id={'div'+(props.id-1)} className="ATLUnit" onClick={()=>props.openModal(props.id-1)}>
        <p className = {(props.title.length>25) ? "ATLTitle ATLSmallTitle" : "ATLTitle ATLBigTitle"}>{props.title}</p>
        <p className = "ATLDate">{props.utxDate.substring(5,7)}/{props.utxDate.substring(0,4)}</p>
      </div>


  )
}

export default AchievementTLUnit;
