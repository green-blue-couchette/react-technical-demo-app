import React, { useEffect } from 'react'
import CFR_chime from "./assets/CFR_chime.wav";

export default function Pg2Trains() {

  useEffect(() => {
    const chime = new Audio(CFR_chime);
    chime.play().catch((e) => console.error(e + "\n Nothing to do about that."));
  },[]);

  return (
    <>
        <h1>Trains page</h1>

        <img src="https://www.railpictures.net/images/d1/1/5/3/6153.1375617413.jpg" alt="Romanian train" width = "500"></img>

        <br></br>

        <label>Picture owner: Titel Costica, <a href="https://www.railpictures.net/photo/445941/" target="_blank" rel="noopener noreferrer">RailPictures.Net</a></label>
    </>
  )
}
