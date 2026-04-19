import { useEffect, useState } from 'react'
import React from 'react'
import Macwindow from './Windows/Macwindow'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


 const Notes = ({windowname, windowState, setwindow}) => {
    const [markdown, setmarkdown] = useState(null)
    useEffect(() => {
      fetch("/notes.txt")
      .then(res=>res.text())
      .then(text=>setmarkdown(text))
    
      
    }, [])
    
  return (
   
    <Macwindow windowname={windowname} windowState={windowState} setwindow={setwindow}>
      <div className='h-full overflow-y-auto p-4 pb-40  '>
          {
            markdown? <SyntaxHighlighter className="!bg-transparent"language='typescript'   wrapLongLines={true} style={atelierDuneLight}>{markdown}</SyntaxHighlighter>: <p> Loading...</p>
        }
      </div>

    </Macwindow>
  )
}
export default Notes

