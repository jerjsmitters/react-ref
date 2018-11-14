import React from 'react';
import Achievements from './Achievements.js';
import './timeline.css';


const Timeline = (props)=> {
  return(
    <div id='timelineCont'>
      <h1>Timeline</h1>
      <Achievements achievements={props.achievements}/>
      <script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>
      <div id='timeline-embed'></div>
      <script type="text/javascript">
      timeline = new TL.Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
      </script>


    </div>
  )
}

export default Timeline;
