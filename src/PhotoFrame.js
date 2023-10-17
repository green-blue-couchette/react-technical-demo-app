import React from 'react'

export default function PhotoFrame({isVisible}) {

    if(isVisible)
    {
        return (
            <div>
                <img src="https://images5.alphacoders.com/342/342827.jpg" alt="Elephant calf" width="500"></img>
            </div>
          )
    }

    return(
        <div></div>
    )
  
}
