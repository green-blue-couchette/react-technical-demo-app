import React, {useState, useEffect, useRef} from 'react'

import CFR_TRANSYLVANIA from '../assets/CFR_IANCU_REVERB.wav';
import CFR_BUCHAREST from '../assets/CFR_GLASUL_ROTILOR.wav';
import loading_spinner from '../assets/loading-spinner.gif';
import speaker from '../assets/speaker.gif';

import '../stylesheets/TrainAnnouncementPanel.css';

import * as credentials from '../credentials.js';

export default function TrainAnnouncementPanel({imagesState, setImagesState}) {

  const [stopsAtAllStations, setStopsAtAllStations] = useState(true);
  const [onlyStopsAtFinalStation, setOnlyStopsAtFinalStation] = useState(true);
  const [continuesToward, setContinuesToward] = useState(false);
  const [fromDirection, setFromDirection] = useState(false);
  const [multipleTrainsAtPlatform, setMultipleTrainsAtPlatform] = useState(false);

  const announcementIntroRef = useRef();
  const trainTypeRef = useRef();
  const trainNumberRef = useRef();

  const startingStationRef = useRef();
  const destinationStationRef = useRef();
  const platformNumberRef = useRef();
  
  const fromDirectionStations = useRef();
  const continuesTowardStations = useRef();

  const doesNotStopAtSelectedStationsRef = useRef();

  const [introSong, setIntroSong] = useState(new Audio());
  const [announcementAudio, setAnnouncementAudio] = useState(new Audio());
  const introSongRef = useRef();
  const announcementAudioRef = useRef();

  const [announcementPlaybackState, setAnnouncementPlaybackState] = useState("stopped");
  /**
   * 4 states:
   * 1) "stopped"
   * 2) "preparing"
   * 3) "fetching"
   * 4) "playing"
   */

  const proxyURL = "https://corsproxy.io/?";
  const speechGeneratorAddress = "https://speechgen.io/index.php?r=api/text";

  // When component is mounted
  useEffect(() => {
    handleSelectTrainType(); // Update the state that stores the displayed train page and credits, in accordance with the pre-selected Train type of this component

    // When component is about to unmount, stop playing the intro/announcement audios
    return () => {
      stopAudioPlayers();
    }
  }, []);

  function stopAudioPlayers(){
    if(!introSongRef.current.paused){
      introSongRef.current.pause();
    }
    if(!announcementAudioRef.current.paused){
      announcementAudioRef.current.pause();
    } 
  }

  // Update the refs of the audio players, when the audio players are changed.
  useEffect(() => {
    introSongRef.current = introSong;
    announcementAudioRef.current = announcementAudio;
  }, [introSong, announcementAudio]);

  // Handle changes to the announcement playback state
  // Controls intro/announcement audio players
  useEffect(() => {
    // If an announcement is already playing, stop it
    if(announcementPlaybackState === "preparing" || announcementPlaybackState === "fetching"){
      stopAudioPlayers();
    }

    if(announcementPlaybackState === "playing"){
      introSong.play();
      introSong.onended = () => {
        announcementAudio.play();
      };
      announcementAudio.onended = () => {
        setAnnouncementPlaybackState("stopped");
      }
    }
  }, [announcementPlaybackState]);

  function handleSelectTrainType(){
    let trainImageURL = "";
    let owner = "";
    let sourcePage = "";
    let displayedURL = "";
    
    if(trainTypeRef.current.value === "IRN"){
      trainImageURL = "http://transport-in-comun.ro/trenuri/vag-cal/dormit/61%2053%2070-91%20009-8-BucN-003.jpg";
      owner = "Dragoş Anoaica";
      sourcePage = "http://transport-in-comun.ro/trenuri/vag-cal/vag_70-91.htm";
      displayedURL = "transport-in-comun.ro/trenuri/";
    }
    else if(trainTypeRef.current.value === "IR"){
      trainImageURL = "http://transport-in-comun.ro/trenuri/vag-cal/26-16/50%2053%2026-16%20004-9-24.05.2008.jpg";
      owner = "Dragoş Anoaica";
      sourcePage = "http://transport-in-comun.ro/trenuri/vag-cal/vag_26-16.htm";
      displayedURL = "transport-in-comun.ro/trenuri/";
    }
    else if(trainTypeRef.current.value === "R"){
      trainImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/17-buc_%281%29.jpg/640px-17-buc_%281%29.jpg";
      owner = "Stefan Bichler";
      sourcePage = "https://commons.wikimedia.org/wiki/File:17-buc_(1).jpg";
      displayedURL = "commons.wikimedia.org";
    }

    setImagesState({
      ...imagesState,
      trainImage : trainImageURL,
      credits:{
        ...imagesState.credits,
        owner : owner,
        sourcePage : sourcePage,
        displayedURL : displayedURL
      }
    });
  }

  function parseAnnouncement(){
    // Parse the data from the announcement form, in the right order, into a string.
    /** Announcement structure (Romanian):
     * Stimați călători.
      Trenul <Train type> <train no.> operat de CFR Călători.
      Din direcția <starting station>, <list of stations>.
      Soseste în stație la linia <linia>.
      Și va pleca in direcția <list>, <destination station>.
  
      Vă rugăm să fiți atenți la îmbarcarea în vagoane.
      Vă dorim călătorie plăcută!
     */
  
    /** Special romanian characters to use:
     *  Ăă Ââ Îî Șș Țț
     */
  
    /* START OF BUILDING ANNOUNCEMENT STRING*/
    let announcementString = "Stimați călători, trenul ";

    // add train type
    if(trainTypeRef.current.value === "IRN")
      announcementString += "InterRegio Noapte";
    else if(trainTypeRef.current.value === "IR")
      announcementString += "InterRegio";
    else if(trainTypeRef.current.value === "R")
      announcementString += "Regio";
    else
      announcementString += "necunoscut" // if chosen train type is not one of the valid ones, for some odd reason

    announcementString += " ";

    // add train number
    announcementString += trainNumberRef.current.value + ", ";
  
    // add operator (fixed string)
    announcementString += "operat de CFR călători, ";
  
    // Add "from direction" (preamble + the starting station)
    announcementString += "din direcția "
      // if multiple "from direction" stations are provided, add those too
    announcementString += startingStationRef.current.value;
    
    if(fromDirection)
      announcementString += ", " + fromDirectionStations.current.value;

    announcementString += ", ";

    // Add "arrives at platform no. x" (preamble + platform no.)
    announcementString += "sosește în stație la linia ";
    announcementString += platformNumberRef.current.value + " ";

    // Add "continues toward direction"
    announcementString += "și va pleca în direcția ";
    // If multiple "toward" stations are provided, add those
    if(continuesToward)
      announcementString += continuesTowardStations.current.value + ", ";
    // Add final station name
    announcementString += destinationStationRef.current.value;

    announcementString += ". ";
  
    // IF train skips some stations
    if(!stopsAtAllStations){
      if(onlyStopsAtFinalStation){ // if train only stops at last station, add THAT to the announcement.
        announcementString += "Atenție! Trenul nu se oprește până la stația ";
        announcementString += destinationStationRef.current.value;
      }
      else{ // else (if train skips SELECTED stations), add THOSE to the announcement.
        announcementString += "Atenție! Trenul nu se oprește la stațiile ";
        announcementString += doesNotStopAtSelectedStationsRef.current.value;
      }
      announcementString += ". ";
    }
    
    // if multiple trains at this platform, add that to the announcement.
    if(multipleTrainsAtPlatform)
      announcementString += "Atenție! Alte trenuri se află pe aceeași linie. Asigurați-vă că v-ați îmbarcat în trenul corect. "

    // Add "please be careful when boarding the railcars" and "we wish you a pleasant journey" (fixed string)
    announcementString += "Vă rugăm să fiți atenți la îmbarcarea în vagoane. Vă dorim călătorie plăcută!";
    /* END OF BUILDING ANNOUNCEMENT STRING*/

    return announcementString;

    // DEBUG, LOGGING
    /*
    console.log("Intro type is: ", announcementIntroRef.current.value,
      ", Train type is", trainTypeRef.current.value,
      ", Train number is", trainNumberRef.current.value,
      
      ", Starting station is", startingStationRef.current.value,
      ", Destination station is", destinationStationRef.current.value,
      ", Arrives at platform number", platformNumberRef.current.value,
      ", multiple trains at platform?", multipleTrainsAtPlatform,
      ", fromDirection box is checked:", fromDirection,
      ", fromDirection stations:", fromDirectionStations.current.value,
      ", continuesToward box is checked", continuesToward,
      ", continuesToward stations:", continuesTowardStations.current.value,
      ", stopsAtAllStations is", stopsAtAllStations,
      "onlyStopsAtFinalStation is", onlyStopsAtFinalStation,
      ", does not stop at selected stations:", doesNotStopAtSelectedStationsRef.current.value
      );
    */
  }

  async function fetchTTSAnnouncement(announcementString){
    setAnnouncementPlaybackState("fetching");

    const requestData = {
      "token":  credentials.API_TOKEN,
      "email":  credentials.API_EMAIL,
      "voice":  "Emil",
      "text":   announcementString,
      "format": "mp3"
    };

    const apiResponse = await fetch(proxyURL + speechGeneratorAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify(requestData)
    });

    const apiResponseData = await apiResponse.json();
    return apiResponseData.file;
  }

  async function makeAnnouncement(){
    
    await setAnnouncementPlaybackState("preparing");

    // Choose intro song.
    const announcementIntroName = announcementIntroRef.current.value;
    
    if(announcementIntroName === "Transylvania")
      setIntroSong(new Audio(CFR_TRANSYLVANIA));
    else if (announcementIntroName === "Bucharest")
      setIntroSong(new Audio(CFR_BUCHAREST));

    // Parse announcement into a string
    console.log("Parsing announcement into a string..."); // logging
    let announcementString = parseAnnouncement();
    console.log("Announcement is:", announcementString); // logging
  
    // Make API call to Text-to-Speech service.
    console.log("Fetching spoken announcement from TTS API..."); // logging
    const mp3FileLocation = await fetchTTSAnnouncement(announcementString);
    console.log("MP3 FILE IS AT", mp3FileLocation); // logging
    setAnnouncementAudio(new Audio(mp3FileLocation));

    // Play intro song, then play announcement.
    setAnnouncementPlaybackState("playing");
  }
  
  return (
    <>
    
      {/** "Play Announcement" button */}
      <div className='train-announcement-panel-body'>

        <section className='playback-controls'>
          <div className='input-row input-group-0'>
            <input
              className='full-remaining-width-input-element'
              id='train-announcement-panel-playback-play-button'
              type="button"
              defaultValue="Play announcement"
              onClick={makeAnnouncement}
            />
          </div>
        </section>

        {/**  Div for loading and loudspeaker gifs .
         *    Renders contents conditionally.
         */}
        <section className='playback-icon-area'>
          {  ("stopped" === announcementPlaybackState && <div></div>)
          || ("fetching" === announcementPlaybackState && <img src={loading_spinner} alt="animated loading icon"></img>)
          || ("playing" == announcementPlaybackState && <img src={speaker} alt="animated playback icon"></img>)
          }
        </section>
        
        {/*Div that contains all the train data inputs*/}
        <section className='inputs'>

          {/** "Announcement intro" input */}
          <div className='input-group-1'>
            <div className='input-row'>
              <label htmlFor='announcement-intro-selector'>Announcement intro: </label>
              <select
                className='full-remaining-width-input-element'
                id='announcement-intro-selector'
                ref={announcementIntroRef}
                onChange={() => console.log("Announcement intro was selected:", announcementIntroRef.current.value)} >
                  <option value="Transylvania">Transylvania</option>
                  <option value="Bucharest">Bucharest</option>
              </select>
            </div>

              {/** Train code inputs */}
            <div className='input-row'>
              <label htmlFor='train-type-selector'>Train: </label>
              <select
                id='train-type-selector'
                ref={trainTypeRef}
                onChange={() => {handleSelectTrainType(); console.log("Train type was selected:", trainTypeRef.current.value, trainNumberRef.current.value);}} >
                  <option value="IRN">IRN</option>
                  <option value="IR">IR</option>
                  <option value="R">R</option>
              </select>

              <input
                className='full-remaining-width-input-element'
                id='train-number-input'
                type="number"
                defaultValue="1741"
                ref={trainNumberRef}
              />
            </div>
          </div>

          <div className='input-group-2'>
            {/** "Starting station / destination station" inputs */}
            <div className='input-row'>
              <label htmlFor='startingStation'>Starting station: </label>
              <input
                className='full-remaining-width-input-element'
                id='startingStation'
                type="text"
                defaultValue="București"
                ref={startingStationRef}
              />
            </div>

            <div className='input-row'>
              <label htmlFor='destinationStation'>Destination: </label>
              <input
                className='full-remaining-width-input-element'
                id='destinationStation'
                type="text"
                defaultValue="Satu Mare"
                ref={destinationStationRef}
              />
            </div>
          </div>
          

          <div className='input-group-3'>
            {/** "Arrives at platform / multiple stations at this platform" inputs */}
            <div className='input-row'>
              <label htmlFor='arrivalPlatform'>Arrives at platform: </label>
              <input
                className='full-remaining-width-input-element'
                id='arrivalPlatform'
                type="number"
                defaultValue="1"
                ref={platformNumberRef}
              />
            </div>

            <div className='input-row'>
              <input
                id='multipleTrainsAtPlatform'
                type="checkbox"
                onChange={() => {setMultipleTrainsAtPlatform(!multipleTrainsAtPlatform);}}
              />
              <label htmlFor='multipleTrainsAtPlatform'>Multiple trains at this platform</label>
            </div>
          </div>
          

          <div className='input-group-4'>
            {/** "From direction / continues toward direction" inputs */}
            {/**This checkbox enables/disables the accompanying input text field. Text field keeps the text regardless. */}
            <div className='input-row'>
              <input
                id='fromDirection'
                type="checkbox"
                onChange={() => setFromDirection(!fromDirection)}
              />
              <label htmlFor='fromDirection'>From direction: </label>
              <input
                className='full-remaining-width-input-element'
                id='fromDirection'
                type="text"
                defaultValue="Sinaia"
                disabled={!fromDirection}
                ref={fromDirectionStations}
              />
            </div>

            {/**This checkbox enables/disables the accompanying input text field. Text field keeps the text regardless. */}
            <div className='input-row'>
              <input
                id='towardDirection'
                type="checkbox"
                onChange={() => setContinuesToward(!continuesToward)}
              />
              <label htmlFor='towardDirection'>Continues toward: </label>
              <input
                className='full-remaining-width-input-element'
                id='towardDirection'
                type="text"
                defaultValue="Târgu Mureș, Baia Mare"
                disabled={!continuesToward}
                ref={continuesTowardStations}
              />
            </div>
          </div>
          

          <div className='input-group-5'>
            {/** "Train skips some stations" inputs */}
            {/**This checkbox enables/disables the below two radio buttons and the accompanying input text field. The text field keeps the text regardless.*/}
            <div className='input-row'>
              <input
                id='stopsAtAllStations'
                type="checkbox"
                defaultChecked={!stopsAtAllStations}
                onChange={() => {setStopsAtAllStations(!stopsAtAllStations);}}
              />
              <label htmlFor='stopsAtAllStations' >Train skips some stations</label>
            </div>
            
            <div className='input-row'>
              <input
                id='onlyFinalStation'
                type="radio"
                name="noStops"
                disabled={stopsAtAllStations}
                onChange={() => {setOnlyStopsAtFinalStation(true); console.log("Only stops at FINAL STATION");}}
                defaultChecked={onlyStopsAtFinalStation}
              />
              <label htmlFor='onlyFinalStation'>Only stops at final station</label>
            </div>
            
            <div className='input-row'>
              <input
                id='noStopStations'
                type="radio"
                name="noStops"
                onChange={() => {setOnlyStopsAtFinalStation(false); console.log("Skips SPECIFIC STATIONS");}}
                disabled={stopsAtAllStations}
              />
              <label htmlFor='noStopStations'>Does not stop at these stations: </label>
              <input
                className='full-remaining-width-input-element'
                id='noStopStations'
                type="text"
                name="noStops"
                defaultValue="Ciceu"
                disabled={stopsAtAllStations || onlyStopsAtFinalStation}
                ref={doesNotStopAtSelectedStationsRef}
              />
            </div>
          </div>
          
          
          {/** Structure of the Announcement form...
           * (For future versions:
           * - <dropdown field>: Operator (Amtrak (USA), SJ (Sweden), MÁV (Hungary), CFR (Romania))
           *    Lets user choose which voice will make the announcement, which train type is allowed in the "Train type" dropdown, which default values the form's fields are filled with, which train photos and railway operator images are shown.)
           * 
           * x Announcement style <dropdown field>
           * 
           * x Train:
           * x Train type (eg IRN, InterCity) <dropdown field ('select' tag)>
           * x Train number <number field>
           * 
           * x Starting Station <text field>
           * x Destination station <text field>
           * 
           * x Arrives at platform: <number input field>
           * x Checkbox: Multiple trains at platform. Make sure you board the correct train.
           * 
           * x Checkbox: From direction <text field>
           * x Checkbox: Continues toward <text field>
           * 
           * x Checkbox: Train skips some stations <label>
           * x Radio Button: "Only stops at final station": <text field>
           * x Radio button: "Does not stop at these stations:" <text field>
           * 
           */}
        </section>

      </div>

    </>
  )
}
