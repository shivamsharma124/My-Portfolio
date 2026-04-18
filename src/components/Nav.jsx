import React from 'react'
import DateTime from './DateTime'

const Nav = () => {
  return (
    <div className="main-nav px-4 py-2 text-white  w-full bg-black/5 border-0.5 border-white/20 backdrop-blur-md flex justify-between">
        <div className='Left flex gap-5 items-center font-sans'>
            <div className='apple-icon'>
                <img src="/Nav_img/apple.svg" alt="" />
            </div>
            <div > <p>Shivam Sharma</p></div>
            <div> <p> File </p></div>
            <div> <p> Window</p></div>
            <div> <p> Terimnal</p></div>


        </div>
        <div className='right flex gap-5 items-center font-sans'>
        <div className='wifi-icon'>
            <img src="/Nav_img/wifi.svg" alt="" />
           
        </div>
         <DateTime />
         </div>
    </div>
  )
}

export default Nav