import React from 'react'

const Card = ({elem}) => {
  return (
    <div className='Card text-white flex flex-col gap-2 max-w-[25rem] p-2 rounded-2xl bg-gray-300/20'>
        <img className='rounded-2xl w-full ' src={elem.image} alt="" />
         <h1 className='font-bold text-2xl'>{elem.title}</h1>
         <p className='text-sm'> {elem.description}</p>
         <div className='flex gap-1 flex-wrap'>
         {elem.tags.map(function (tag){
          return <p className='bg-gray-500  rounded-xl px-2 py-0.5'> {tag}</p>
         })}
         </div>
         <div className="flex gap-4 flex-wrap ">
          <a href={elem.repoLink}>Github</a>
         {elem.demoLink  && <a href={elem.demoLink}>Demo</a>}
         </div>
    </div>
    
    
  )
}

export default Card