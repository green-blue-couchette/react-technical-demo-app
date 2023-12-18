import React, {useState, useEffect} from 'react';
import loading_spinner from '../assets/loading-spinner.gif';

import '../stylesheets/LargeImage.css'

export default function LargeImage({imageSrc, imgWidth, alt, stylingID}) {
    /* stylingID is used to apply additional, instance-specific, CSS styling to this component. */

    const [imageHasLoaded, setImageHasLoaded] = useState(false);
    /** Case 1 (default): Image has not yet loaded, display spinner
     *  Case 2: Image has loaded. Hide spinner, show image.
     *  Case 3 (same as Case 1): Image url changed; new image has to be loaded, display spinner.
     */

    /**If the imageSrc has changed, that means a new image has to be retrieved...
     * So show a spinner until the new pic has fully loaded.
     */    
    useEffect(() => {
        setImageHasLoaded(false);
    }, [imageSrc]);

  return (
    <div className='large-image-component' id={stylingID}>
        <img src={loading_spinner}
             alt="loading"
             
             className={imageHasLoaded? 'hidden' : 'shown'}
             >
        </img>
        
        <img src={imageSrc}
             alt={alt}
             width={imgWidth}
             onLoad={() => setImageHasLoaded(true)}
             
             className={imageHasLoaded? 'shown' : 'hidden'}
             >
        </img>
    </div>
  )
}
