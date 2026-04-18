import React, { useState } from 'react'
import { Rnd } from "react-rnd";

const Macwindow = ({children ,windowname,window, setwindow}) => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentSize, setCurrentSize] = useState({ width: '50vh', height: '60vh' })
  const [currentPosition, setCurrentPosition] = useState({ x: 200, y: 200 })

  const closeApp = (app) => {
    setwindow(prev => ({
      ...prev,
      [app]: false
    }))
  }

  const toggleFullScreen = () => {
    if (isFullScreen) {
      setIsFullScreen(false)
      setCurrentSize({ width: '50vh', height: '60vh' })
      setCurrentPosition({ x: 200, y: 200 })
    } else {
      setIsFullScreen(true)
      setIsMinimized(false)
      setCurrentSize({ width: '100vw', height: '100vh' })
      setCurrentPosition({ x: 0, y: 0 })
    }
  }

  const toggleMinimize = () => {
    if (isMinimized) {
      setIsMinimized(false)
      setCurrentSize({ width: '50vh', height: '60vh' })
      setCurrentPosition({ x: 200, y: 200 })
    } else {
      setIsMinimized(true)
      setIsFullScreen(false)
      setCurrentSize({ width: 300, height: 200 })
      // Keep current position, don't move to bottom right
    }
  }

  return (
  
   <Rnd 
     bounds={isFullScreen ? false : "window"} 
     size={currentSize}
     position={currentPosition}
     onDragStop={(e, d) => setCurrentPosition({ x: d.x, y: d.y })}
     onResizeStop={(e, direction, ref, delta, position) => {
       setCurrentSize({ width: ref.offsetWidth, height: ref.offsetHeight })
       setCurrentPosition(position)
     }}
     disableDragging={isFullScreen}
     enableResizing={!isFullScreen}
   >
    <div className="window bg-black rounded-lg overflow-hidden h-full flex flex-col" >
      <nav className='nav flex gap-4 items-center border-b-whitesmoke border-b-1 text-white '>
        <div className='all-dots flex gap-2 px-4 py-2'>
          <div onClick={() => closeApp(windowname)}
            
          className='dot h-4 w-4 bg-red-500 rounded-full cursor-pointer '></div> 
          <div onClick={toggleMinimize} className='dot h-4 w-4 bg-yellow-400 rounded-full cursor-pointer '></div> 
          <div onClick={toggleFullScreen} className='dot h-4 w-4 bg-green-600 rounded-full cursor-pointer '></div> 
           </div>

          <div> <p>shivamsharma -zsh</p></div>
        

      </nav>
        <div className='main-content text-white h-full overflow-hidden flex-1 min-h-0'>
          {children}
        </div>
        
    </div>
    </Rnd>
      
  )
}

export default Macwindow