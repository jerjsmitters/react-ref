import React from 'react';

const DisplayedLaunch = (props) => {

  if(props.activeState){
    let index = props.activeState.substring(1);
    index = parseInt(index);
    let chosenLaunch = props.allLaunches[index-1];

    return(
      <div id="displayedLaunch">
        <div id="disLaunchContent">
          <div id="disLaunchTitle">
            <h1>Flight #{chosenLaunch.flight_number}: {chosenLaunch.mission_name}</h1>
            <h1>({chosenLaunch.launch_date_utc.substring(11,16)} {chosenLaunch.launch_date_utc.substring(8,10)}/{chosenLaunch.launch_date_utc.substring(5,7)}/{chosenLaunch.launch_date_utc.substring(0,4)})</h1>
          </div>
          <div>
            <h2>How'd it go?</h2>
            <p>The mission was a <span className='dynamicWords'>{(chosenLaunch.launch_success) ? 'success!' : 'failure!'}</span>
              The rocket was {(chosenLaunch.rocket.fairing) ? ((chosenLaunch.rocket.fairings.recovered) ? 'recovered!' :'NOT recovered!') : null },
              and there was {(chosenLaunch.rocket.fairing) ? ((chosenLaunch.rocket.fairings && chosenLaunch.rocket.fairings.recovery_attempt) ? 'an attempt to recover it.' : 'no attempt to recover it.') : null}
              {(chosenLaunch.rocket.fairings.recovered) ? ((chosenLaunch.rocket.fairings.reused) ? 'The rocket was reused at a later date!' : 'The rocket was never reused.') : null}
              <br/>{(chosenLaunch.details) ? ('Further details: '+chosenLaunch.details+'.') : null}</p>
          </div>
          <ul>
            <li>Mission Success: {chosenLaunch.launch_success.toString()}</li>
            <li>Rocket: {chosenLaunch.rocket.rocket_name}</li>
            <li>Payloads: <ul>{props.payloadPopulator(chosenLaunch.rocket.second_stage.payloads)}</ul></li>
            {(chosenLaunch.rocket.first_stage.cores[0].core_serial) ? (<li>Cores: <ul>{props.corePopulator(chosenLaunch.rocket.first_stage.cores)}</ul></li>) : <li>Cores:N/A</li>}
            <li>Recovered: {(chosenLaunch.rocket.fairings) ? (chosenLaunch.rocket.fairings.recovered.toString()) : ('N/A')}
              <br/> Attempted to recover: {(chosenLaunch.rocket.fairings) ? (chosenLaunch.rocket.fairings.recovery_attempt.toString()) : "N/A"}</li>
            <li>Launch site:{chosenLaunch.launch_site.site_name}</li>

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
      </div>
    )
  }else{
    return(null)
  }
}

export default DisplayedLaunch;
