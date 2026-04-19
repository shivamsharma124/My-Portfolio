import React from 'react'
import Macwindow from './Macwindow'
import GithubData from '../../assets/github.json'
import Card from './Card'

const Github = ({windowname, windowState, setwindow}) => {
  return (
 

 <Macwindow windowname={windowname} windowState={windowState} setwindow={setwindow}>

  
<div className='Allcards flex flex-wrap gap-5 justify-center overflow-y-auto h-full p-4 pb-40'>
      {GithubData.map(function(project,idx){
      return <Card key={idx} elem={project} />
    })}

</div>
 </Macwindow>
    
  )
}

export default Github