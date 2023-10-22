import React, {useState, useRef} from 'react'
import CFR_IANCU_REVERB from "./assets/CFR_IANCU_REVERB.wav";

function makeAnnouncement(){ // TODO: this stub function.

  // Todo: Make it console.log all the data from the announcement form.
  console.log("(Stub) Playing announcement");

  // Parse the data from the announcement form, in the right order, into an array into a string.
  /** Announcement structure (preliminary):
   * Stimati calatori.
    Trenul <Train type> <train no.> operat de CFR Calatori.
    Din directia <starting station>, <list of stations>.
    Soseste in statie la linia <linia>.
    Si va pleca in directia <list>, <destination station>.

    Va rugam sa fiti atenti la imbarcarea in vagoane.
    Va dorim calatorie placuta!
   */

  // Make API call to Text-to-Speech service.

  // Play intro, wait before playing announcement, play announcement
  new Audio(CFR_IANCU_REVERB).play();

}

export default function TrainAnnouncementPanel() {

  return (
    <>
      <div style={{ borderStyle:"solid", borderColor: "black", maxWidth: "500px", float: ""}}>
      <input type="button" defaultValue="Play announcement" onClick={makeAnnouncement} style={{width:"100%"}}/>

      <label htmlFor="announcementIntro">Announcement intro: </label>
      <select style={{width: "71%"}} id="announcementIntro" onChange={() => console.log("Announcement intro was selected")}> {/**TODO */}
          <option value="Transylvania">Transylvania</option>
          <option value="Bucharest">Bucharest</option>
      </select>
      <br></br>

      <label htmlFor="trainNumber">Train: </label>
      <select style={{width: "75px"}} id="trainNumber" onChange={() => console.log("Train type was selected")}>
          <option value="IRN">IRN</option>
          <option value="IC">IC</option>
      </select>
      <input type="number" id="trainNumber" defaultValue="1741"></input>
      <br></br>
      <br></br>

      <label htmlFor="startingStation">Starting station: </label>
      <input type="text" id="startingStation" defaultValue="Bucuresti"></input>
      <br></br>

      <label htmlFor="destinationStation">Destination: </label>
      <input type="text" id="destinationStation" defaultValue="Satu Mare"></input>
      <br></br>
      <br></br>

      <label htmlFor="arrivalPlatform">Arrives at platform: </label>
      <input type="number" id="arrivalPlatform" defaultValue="1"></input>
      <br></br>
      <input type="checkbox" id="multipleTrainsAtPlatform"/>
      <label htmlFor="multipleTrainsAtPlatform">Multiple trains at this platform</label>
      <br></br>
      <br></br>

      {/**TODO: Make the checkbox enable/disable the input text field, but make the field keep the text regardless! */}
      <input type="checkbox" id="fromDirection"></input>
      <label htmlFor="fromDirection">From direction: </label>
      <input type="text" id="fromDirection" defaultValue="Sinaia"></input>
      <br></br>

      {/**TODO: Make the checkbox enable/disable the input text field, but make the field keep the text regardless! */}
      <input type="checkbox" id="towardDirection"></input>
      <label htmlFor="towardDirection">Continues toward: </label>
      <input type="text" id="towardDirection" defaultValue="Targu Mures, Oradea, Baia Mare"></input>
      <br></br>
      <br></br>

      {/** TODO: Unchecked checkbox disables the two radio buttons and the input text field "Oradea" but lets it keep the text. */}
      <input type="checkbox" id="skipsSomeStations"/>
      <label htmlFor="skipsSomeStations">Train skips some stations</label>
      <br></br>
      {/** TODO: If checked, radio button disables the input text field "Oradea" but lets it keep the text. Otherwise makes the input text box fillable */}
      <input type="radio" id="onlyFinalStation" name="noStops"></input>
      <label htmlFor="onlyFinalStation">Only stops at final station</label>
      <br></br>
      <input type="radio" id="noStopStations" name="noStops"></input>
      <label htmlFor="noStopStations">Does not stop at these stations: </label>
      <input type="text" id="noStopStations" name="noStops" defaultValue="Oradea"></input>
      <br></br>
      <br></br>

      
      {/** Structure of the Announcement form...
       * (For future versions:
       * - <dropdown field>: Operator (SJ (Sweden), MÁV (Hungary), CFR (Romania))
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
