import React from 'react'
import DateTime from './DateTime'

const Nav = () => {
  return (
    <div className="main-nav px-2 md:px-4 py-1 md:py-2 text-white w-full bg-black/5 border-0.5 border-white/20 backdrop-blur-md flex justify-between items-center text-xs md:text-base">
        <div className='Left flex gap-2 md:gap-5 items-center font-sans'>
            <div className='apple-icon h-4 md:h-6'>
                <img src="/Nav_img/apple.svg" alt="Apple" className='w-full h-full' />
            </div>
            <div className='hidden sm:block'> <p>Shivam Sharma</p></div>
            <div className='hidden md:block'> <p> File </p></div>
            <div className='hidden md:block'> <p> Window</p></div>
            <div className='hidden lg:block'> <p> Terminal</p></div>


        </div>
        <div className='right flex gap-2 md:gap-5 items-center font-sans'>
        <div className='wifi-icon h-4 md:h-6'>
            <img src="/Nav_img/wifi.svg" alt="Wifi" className='w-full h-full' />
           
        </div>
         <DateTime />
         </div>
    </div>
  )
}

export default Nav