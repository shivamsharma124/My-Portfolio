import React, { useState, useEffect } from 'react'
import { Rnd } from "react-rnd";

const Macwindow = ({children ,windowname, windowState, setwindow}) => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMobile, setIsMobile] = useState(globalThis.innerWidth < 768)
  
  // Set responsive default sizes
  const getDefaultSize = () => {
    if (globalThis.innerWidth < 640) {
      return { width: 'calc(100vw - 20px)', height: 'calc(100vh - 120px)' }
    } else if (globalThis.innerWidth < 768) {
      return { width: '90vw', height: '70vh' }
    }
    return { width: '50vw', height: '60vh' }
  }

  const getDefaultPosition = () => {
    if (globalThis.innerWidth < 640) {
      return { x: 10, y: 60 }
    } else if (globalThis.innerWidth < 768) {
      return { x: 30, y: 60 }
    }
    return { x: Math.max(50, Math.min(200, globalThis.innerWidth * 0.1)), y: Math.max(40, globalThis.innerHeight * 0.1) }
  }

  const [currentSize, setCurrentSize] = useState(getDefaultSize())
  const [currentPosition, setCurrentPosition] = useState(getDefaultPosition())

  const closeApp = (app) => {
    setwindow(prev => ({
      ...prev,
      [app]: false
    }))
  }

  const toggleFullScreen = () => {
    if (isFullScreen) {
      setIsFullScreen(false)
      setCurrentSize(getDefaultSize())
      setCurrentPosition(getDefaultPosition())
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
      setCurrentSize(getDefaultSize())
      setCurrentPosition(getDefaultPosition())
    } else {
      setIsMinimized(true)
      setIsFullScreen(false)
      const minSize = globalThis.innerWidth < 640 ? { width: 250, height: 150 } : { width: 300, height: 200 }
      setCurrentSize(minSize)
      // Keep current position, don't move to bottom right
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const mobile = globalThis.innerWidth < 768
      setIsMobile(mobile)
      if (!isFullScreen && !isMinimized) {
        setCurrentSize(getDefaultSize())
        setCurrentPosition(getDefaultPosition())
      }
    }
    globalThis.addEventListener('resize', handleResize)
    return () => globalThis.removeEventListener('resize', handleResize)
  }, [isFullScreen, isMinimized])

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
     enableResizing={!isFullScreen && !isMobile}
     minWidth={isMobile ? 200 : 300}
     minHeight={isMobile ? 150 : 200}
   >
    <div className="window bg-black rounded-lg overflow-hidden h-full flex flex-col" >
      <nav className='nav flex gap-2 md:gap-4 items-center border-b-whitesmoke border-b-1 text-white px-2 md:px-4 py-1 md:py-2'>
        <div className='all-dots flex gap-1.5 md:gap-2'>
          <div onClick={() => closeApp(windowname)}
            
          className='dot h-3 md:h-4 w-3 md:w-4 bg-red-500 rounded-full cursor-pointer hover:opacity-80 transition' title='Close'></div> 
          <div onClick={toggleMinimize} className='dot h-3 md:h-4 w-3 md:w-4 bg-yellow-400 rounded-full cursor-pointer hover:opacity-80 transition' title='Minimize'></div> 
          <div onClick={toggleFullScreen} className='dot h-3 md:h-4 w-3 md:w-4 bg-green-600 rounded-full cursor-pointer hover:opacity-80 transition' title='Fullscreen'></div> 
           </div>

          <div className='text-xs md:text-base'> <p>shivamsharma -zsh</p></div>
        

      </nav>
        <div className='main-content text-white h-full overflow-auto flex-1 min-h-0'>
          {children}
        </div>
        
    </div>
    </Rnd>
      
  )
}

export default Macwindow