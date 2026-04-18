import React from 'react'
import { useState } from 'react'
import Doc from './components/Doc.jsx'
import Nav from './components/Nav.jsx'
import Macwindow from './components/Windows/Macwindow.jsx'
import Github from './components/Windows/Github.jsx'
import Resume from './components/Resume.jsx'
import Notes from './components/Notes.jsx'
import Spotify from './components/Spotify.jsx'
import Cli from './components/Cli.jsx'
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github.js'
const App = () => {
  const [window, setwindow] = useState({
    github:false,
    note:false,
    cli:false,
    spotify:false,
    resume:false
  })
  return (
    <main 
      className='bg-cover bg-center h-screen w-screen bg-no-repeat overflow-hidden'
      style={{ backgroundImage: `url("/bg.jpg")` }}>
        <Nav />
         <Doc window={window} setwindow={setwindow} /> 
    {window.github &&<Github windowname="github" window={window} setwindow={setwindow}  />}
   {window.note && <Notes windowname="note" window={window} setwindow={setwindow}/>}
     {window.spotify && <Spotify windowname="spotify" window={window} setwindow={setwindow}/>}
      
      {window.resume &&   <Resume windowname="resume" window={window} setwindow={setwindow}/>}
       {window.cli &&  <Cli windowname="cli" window={window} setwindow={setwindow}/>}
    </main>
  )
}

export default App