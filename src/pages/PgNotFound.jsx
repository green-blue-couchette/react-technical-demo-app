import React from 'react'

import '../stylesheets/PgNotFound.css';

export default function PgNotFound() {
  return (
    <>
      <div className='not-found-page'>

        {/* // THIS HEADER IS NOT NEEDED
        <div className='page-header'>
            <h1>NOT FOUND</h1>
        </div>
        */}
        
        <div className='page-body'>
          <h2>THAT PAGE DOESN'T EXIST.<br></br>PUT YOUR HEADPHONES ON?</h2>

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



