import React, {useState, useEffect, useRef} from 'react'
import CFR_TRANSYLVANIA from "./assets/CFR_IANCU_REVERB.wav";
import CFR_BUCHAREST from "./assets/CFR_GLASUL_ROTILOR.wav";

function makeAnnouncement(){ // TODO: this stub function.

  // Todo: Make it console.log all the data from the announcement form.
  console.log("(Stub) Playing announcement");

  // Parse the data from the announcement form, in the right order, into an array into a string.
  /** Announcement structure (preliminary):
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

  /* START OF BUILD ANNOUNCEMENT STRING*/

  // add train type
  
  // add train number

  // add operator (fixed string)

  // Add "from direction" (preamble + the starting station)

    // if multiple "from direction" stations are provided, add those too

  // Add "arrives at platform no. x" (preamble + platform no.)

  // Add "continues toward direction"
    // If multiple "toward" stations are provided, add those
    // Add final station name

  // if multiple trains at this platform, add that to the announcement.

  // IF train skips some stations
    // if train only stops at last station, add THAT to the announcement.
    // else (if train skips SELECTED stations), add THOSE to the announcement.

  // Add "please be careful when boarding the railcars" (fixed string)

  // Add "we wish you a pleasant journey" (fixed string)

  /* END OF BUILD ANNOUNCEMENT STRING*/



  // Make API call to Text-to-Speech service.

  // Choose intro song.

  // Play intro, wait before playing announcement, play announcement
  new Audio(CFR_TRANSYLVANIA).play();
  
}

export default function TrainAnnouncementPanel() {

  const [stopsAtAllStations, setstopsAtAllStations] = useState(true);
  const [onlyStopsAtFinalStation, setOnlyStopsAtFinalStation] = useState(true);
  const [continuesToward, setContinuesToward] = useState(false);
  const [fromDirection, setFromDirection] = useState(false);

  function togglestopsAtAllStations(){
    setstopsAtAllStations(!stopsAtAllStations);
    // LOGGING / DEBUG. REMOVE THIS SOON!
    console.log("Toggled stopsAtAllStations");
  }

  useEffect(()=>{
    // debug. REMOVE THIS SOON!
    console.log("stopsAtAllStations (actual value) is", stopsAtAllStations);
  },[stopsAtAllStations]);

  return (
    <>

    {/** "Play Announcement" button */}
      <div style={{ borderStyle:"solid", borderColor: "black", maxWidth: "500px", float: ""}}>
      <input type="button" defaultValue="Play announcement" onClick={makeAnnouncement} style={{width:"100%"}}/>

      <label htmlFor="announcementIntro">Announcement intro: </label>
      <select style={{width: "71%"}} id="announcementIntro" onChange={() => console.log("Announcement intro was selected")}> {/**TODO */}
          <option value="Transylvania">Transylvania</option>
          <option value="Bucharest">Bucharest</option>
      </select>
      <br></br>

    {/** Train code inputs */}
      <label htmlFor="trainNumber">Train: </label>
      <select style={{width: "75px"}} id="trainNumber" onChange={() => console.log("Train type was selected")}>
          <option value="IRN">IRN</option>
          <option value="IR">IR</option>
          <option value="R">R</option>
      </select>

      <input type="number" id="trainNumber" defaultValue="1741"></input>
      <br></br>
      <br></br>


    {/** "Starting station / destination station" inputs */}
      <label htmlFor="startingStation">Starting station: </label>
      <input type="text" id="startingStation" defaultValue="București"></input>
      <br></br>

      <label htmlFor="destinationStation">Destination: </label>
      <input type="text" id="destinationStation" defaultValue="Satu Mare"></input>
      <br></br>
      <br></br>


    {/** "Arrives at platform / multiple stations at this platform" inputs */}
      <label htmlFor="arrivalPlatform">Arrives at platform: </label>
      <input type="number" id="arrivalPlatform" defaultValue="1"></input>
      <br></br>

      <input type="checkbox" id="multipleTrainsAtPlatform"/>
      <label htmlFor="multipleTrainsAtPlatform">Multiple trains at this platform</label>
      <br></br>
      <br></br>


      {/** "From direction / continues toward direction" inputs */}
      {/**This checkbox enables/disables the accompanying input text field. Text field keeps the text regardless. */}
      <input type="checkbox" id="fromDirection" onChange={() => setFromDirection(!fromDirection)}></input>
      <label htmlFor="fromDirection">From direction: </label>
      <input type="text" id="fromDirection" defaultValue="Sinaia" disabled={!fromDirection}></input>
      <br></br>

      {/**This checkbox enables/disables the accompanying input text field. Text field keeps the text regardless. */}
      <input type="checkbox" id="towardDirection" onChange={() => setContinuesToward(!continuesToward)}></input>
      <label htmlFor="towardDirection">Continues toward: </label>
      <input type="text" id="towardDirection" defaultValue="Târgu Mureș, Baia Mare" disabled={!continuesToward}></input>
      <br></br>
      <br></br>


      {/** "Train skips some stations" inputs */}
      {/**This checkbox enables/disables the below two radio buttons and the accompanying input text field. The text field keeps the text regardless.*/}
      <input type="checkbox" id="stopsAtAllStations" defaultChecked={!stopsAtAllStations} onChange={togglestopsAtAllStations}/>
      <label htmlFor="stopsAtAllStations" >Train skips some stations</label>
      <br></br>
      
      <input type="radio" id="onlyFinalStation" name="noStops" disabled={stopsAtAllStations} onChange={() => {setOnlyStopsAtFinalStation(true); console.log("only stops at FINAL STATION");}} defaultChecked={onlyStopsAtFinalStation} ></input>
      <label htmlFor="onlyFinalStation">Only stops at final station</label>
      <br></br>
      
      <input type="radio" id="noStopStations" name="noStops" onChange={() => {setOnlyStopsAtFinalStation(false); console.log("skips SPECIFIC STATIONS");}} disabled={stopsAtAllStations}></input>
      <label htmlFor="noStopStations">Does not stop at these stations: </label>
      <input type="text" id="noStopStations" name="noStops" defaultValue="Ciceu" disabled={stopsAtAllStations || onlyStopsAtFinalStation}></input>
      <br></br>
      <br></br>

      
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
      </div>
    </>
  )
}
