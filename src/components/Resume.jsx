import React from 'react'
import Macwindow from './Windows/Macwindow'

const Resume = ({windowname, window, setwindow}) => {
  return (

     <Macwindow windowname={windowname} window={window} setwindow={setwindow}>
        <div className='h-full'>
            <iframe  className=" h-full w-full"src="./resume.pdf" frameborder="0"></iframe>
        </div>
     </Macwindow>
  )
}

export default Resume