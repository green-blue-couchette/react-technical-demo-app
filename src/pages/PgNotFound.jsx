import React from 'react'

import '../stylesheets/PgNotFound.css';

export default function PgNotFound() {
  return (
    <>
      <div className='not-found-page'>
          <h2>THAT PAGE DOESN'T EXIST.<br></br>PUT YOUR HEADPHONES ON?</h2>

          <div className='pageBody'>
            <iframe
              src="https://www.youtube.com/embed/Ujs5koTJ0xY?si=WeRrXoIbu7PXRH7b&autoplay=1&amp;controls=0"
              frameborder="0"
              title="YouTube video player - Won my Heart by Chris Quilala">
            </iframe>
          </div>
          
      </div>
    </>
  )
}



