import React from 'react';
import { Link } from 'react-router-dom';
import cogwheels from '../assets/cogwheels.png';

import '../stylesheets/pgHome.css';

export default function PgHome() {
  return (
    <div className='home-page'>

        <div className='page-header'>
            <h1>Home</h1>
        </div>
        
        <div className='page-body'>

            <div className='article'>
                <p>
                I built this web app to help myself re-learn React. 
                Here, I intend to collect different mini-applications to showcase my skills and try out ideas. I might incorporate different elements and ideas found here into other, standalone web apps. 
                Things here may change or look incomplete.
                </p>

                <p>The only interesting page right now is <Link to="/trains">Trains</Link>.</p>
                
                <p className='signature'> ― Oliver </p>
            </div>

            <div className='decoration'>
                <img src={cogwheels} alt="" /> {/*DECORATIVE IMAGE*/}
                
                <p className='attribution'><a href="https://www.freepik.com/free-vector/illustration-cogs-gears_2631352.htm#query=cog%20wheel%20sketch&position=35&from_view=search&track=ais&uuid=41d146d4-78c3-4a0b-b78a-2401dfcc740e" target="_blank" rel="noopener noreferrer">Image by rawpixel.com</a> on Freepik
                </p>
            </div>

        </div>
        
    </div>
    
  )
}
