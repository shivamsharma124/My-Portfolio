import React from 'react'
import Macwindow from './Windows/Macwindow'

const Spotify = ({ windowState, setwindow ,windowname}) => {
  return (
  
    <Macwindow windowname={windowname} windowState={windowState} setwindow={setwindow}>
        <div className='h-full'>
            <iframe className='h-full w-full' data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/3HedFe4b2Nqeg1CEzmt6ZI?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </Macwindow>
)
}

export default Spotify