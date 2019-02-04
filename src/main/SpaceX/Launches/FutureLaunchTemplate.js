import React from 'react';

const FutureLaunchTemplate = (props) => {

  //Summary: Description if there is one

    //When will it happen?
    //What will it use to get up there?
    //How many times had it been used before?


  //What will it bring up there? (card for each)
  //How heavy is it?



  //reddit campaign, launch, recovery, media (where applicable)
  //presskit, article, wikipedia (where applicable)
  //video link, dropdown of flickr items (where applicable)

  return(
    <div class="futureLaunchContainer" >
      <button id="displayLaunchReturnBtn" onClick={(()=>props.setInitState())}>←</button>
      <h1>Flight #{props.ft.flight_number}: {props.ft.mission_name}</h1>
      <div class="futureLaunchSummary">
        <h4>Launch Summary</h4>
        <p>
          When will it happen?: At {props.ft.launch_date_utc.substring(11,16)} on {props.ft.launch_date_utc.substring(8,10)}/{props.ft.launch_date_utc.substring(5,7)}/{props.ft.launch_date_utc.substring(0,4)} <br />
          Official Description: {(props.ft.details) ? (props.ft.details) : 'None given by SpaceX! (yet)'}
        </p>
      </div>
      <div class ="futureLaunchPropulsion">
        <h4>Propulsion</h4>
        <p>
          What will it use to get up there? {(props.ft.rocket.first_stage.cores[0].core_serial) ? (props.ft.rocket.first_stage.core[0].core_serial+' core') : 'TBA'}  <br />
          {(props.ft.rocket.first_stage.cores[0].flight) ? ('How many times had it been used before? '+(props.ft.rocket.first_stage.cores[0].flight-1).toString()+' times') : null}
        </p>
      </div>
      <div class="futureLaunchPayload">
        <h4>Payloads</h4>
        <ul>{props.payloadPopulator(props.ft.rocket.second_stage.payloads, false)}</ul>
      </div>

      {(props.ft.rocket.fairings) ? (<div class="futureLaunchFairings">
        <h4>Fairings: The stuff that held it all together</h4>
        <p>
          Did they try to recover it? {(props.ft.rocket.fairings.recovery_attempt) ? 'Yup!' : 'Nope!'} <br />
          {(props.ft.rocket.fairings.recovery_attempt) ? ('Did they succeed? '+(props.ft.rocket.fairings.recovery_attempt) ? 'Yup!' : 'Nope!') : null}
        </p>
      </div>) : null}
      <div class="futureLaunchMedia">
        <h4>Resources:</h4>
        {(props.ft.links.reddit_campaign || props.ft.links.reddit_launch || props.ft.links.reddit_recovery || props.ft.links.reddit_media) ? (
          <div id="discussionLinks">
            Discussion:{' '}
            {(props.ft.links.reddit_campaign) ? (<a href={props.ft.links.reddit_campaign}>Campaign</a>) : null}
            {(props.ft.links.reddit_launch) ? (<a href={props.ft.links.reddit_launch}>Launch</a>) : null}
            {(props.ft.links.reddit_recovery) ? (<a href={props.ft.links.reddit_recovery}>Recovery</a>) : null}
            {(props.ft.links.reddit_media) ? (<a href={props.ft.links.reddit_media}>Media</a>) : null}
            </div>
        ) : 'No media to display yet!'}

      </div>
    </div>
  )
}

export default FutureLaunchTemplate;
