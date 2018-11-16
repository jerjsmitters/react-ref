import React from 'react';

const DisplayedLaunch = (props) => {


  if(props.activeState){
    let index = props.activeState.substring(1);
    index = parseInt(index);
    let chosenLaunch = props.allLaunches[index];

    return(
      <div id="displayedLaunch">
        <p>Latest Launch</p>
        <p>Flight #{chosenLaunch.flight_number}: {chosenLaunch.mission_name}</p>
        <p className="launchTime">{chosenLaunch.launch_date_utc}</p>
        <ul>
          <li>Mission Success: {chosenLaunch.launch_success.toString()}</li>
          <li>Rocket: {chosenLaunch.rocket.rocket_name}</li>
          <li>Payloads: <ul>{props.payloadPopulator(chosenLaunch.rocket.second_stage.payloads)}</ul></li>
          <li>Cores: <ul>{props.corePopulator(chosenLaunch.rocket.first_stage.cores)}</ul></li>
          <li>Recovered: {chosenLaunch.rocket.fairings.recovered.toString()}<br/> Attempted to recover: {chosenLaunch.rocket.fairings.recovery_attempt.toString()}</li>
          <li>Launch site:{chosenLaunch.launch_site.site_name}</li>
          <li>{chosenLaunch.details}</li>
          <li>Other resources:
            <ul>
              <li><a href={chosenLaunch.links.wikipedia}>Mission Wiki</a></li>
              <li><a href={chosenLaunch.links.article_link}>Article</a></li>
              <li><a href={chosenLaunch.telemetry.flight_club}>3D flight path</a></li>
              <li><a href={chosenLaunch.links.video_link}>Video of launch</a></li>
              <li>Flickr: {props.imagePopulator(chosenLaunch.links.flickr_images)} </li>
              <li>Reddit: <a href={chosenLaunch.links.reddit_campaign}>Campaign</a> <a href={chosenLaunch.links.reddit_launch}>Launch</a><br/>
                          <a href={chosenLaunch.links.reddit_recovery}>Recovery (if applicable)</a> <a href={chosenLaunch.links.reddit_media}>More media</a></li>

            </ul>
          </li>
        </ul>
      </div>
    )
  }else{
    return(null)
  }
}

export default DisplayedLaunch;
