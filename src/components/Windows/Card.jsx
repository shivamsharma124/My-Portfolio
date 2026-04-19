import React from 'react'

const Card = ({elem}) => {
  return (
    <div className='Card text-white flex flex-col gap-2 max-w-[25rem] md:max-w-sm sm:max-w-xs p-2 rounded-2xl bg-gray-300/20 w-full'>
        <img className='rounded-2xl w-full object-cover h-48' src={elem.image} alt={elem.title} />
         <h1 className='font-bold text-lg md:text-2xl'>{elem.title}</h1>
         <p className='text-xs md:text-sm flex-grow'> {elem.description}</p>
         <div className='flex gap-1 flex-wrap'>
         {elem.tags.map(function (tag, index){
          return <p key={index} className='bg-gray-500 rounded-xl px-2 py-0.5 text-xs'> {tag}</p>
         })}
         </div>
         <div className="flex gap-4 flex-wrap text-sm md:text-base">
          <a href={elem.repoLink} className='text-blue-400 hover:underline'>Github</a>
         {elem.demoLink  && <a href={elem.demoLink} className='text-blue-400 hover:underline'>Demo</a>}
         </div>
    </div>
    
    
  )
}

export default Card