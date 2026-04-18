import React from 'react'

const Doc = ({ window, setwindow }) => {

  const openApp = (app) => {
    setwindow(prev => ({
      ...prev,
      [app]: true
    }))
  }
  
 


  return (
    <footer className='group flex absolute bottom-5 left-1/2 gap-4 -translate-x-1/2 bg-black/5 px-4 py-2 rounded-2xl backdrop-blur-md border-0.5 border-white/20'>
      
      <div
        onClick={() => openApp('github')}
        className="transition duration-200 group-hover:scale-90 hover:!scale-125 hover:-translate-y-2 w-16 rounded-xl bg-black flex justify-center items-center p-2.5 aspect-square"
      >
        <img src="/doc_img/github.svg" />
      </div>

      <div
        onClick={() => openApp('note')}
        className="transition duration-200 group-hover:scale-90 hover:!scale-125 hover:-translate-y-2 w-16 rounded-xl bg-linear-to-b from-orange-300 to-orange-400 flex justify-center items-center p-2.5 aspect-square"
      >
        <img src="/doc_img/note.svg" />
      </div>

      <div
        onClick={() => openApp('resume')}
        className="transition duration-200 group-hover:scale-90 hover:!scale-125 hover:-translate-y-2 w-16 not-last-of-type:rounded-xl bg-linear-to-b from-red-400 to-red-500 flex justify-center items-center p-2.5 aspect-square"
      >
        <img src="/doc_img/pdf.svg" />
      </div>

      <div
onClick={() => globalThis.open("https://calendar.google.com/calendar/", "_blank")}      
  className="transition duration-200 group-hover:scale-90 hover:!scale-125 hover:-translate-y-2 w-16 rounded-xl bg-linear-to-b from-blue-300 to-blue-400 flex justify-center items-center p-2.5 aspect-square"
      >
        <img src="/doc_img/calender.svg" />
      </div>

      <div
        onClick={() => openApp('spotify')}
        className="transition duration-200 group-hover:scale-90 hover:!scale-125 hover:-translate-y-2 w-16 rounded-xl bg-linear-to-b from-green-400 to-green-500 flex justify-center items-center p-2.5 aspect-square"
      >
        <img src="/doc_img/spotify.svg" />
      </div>

      <div
        onClick={() => globalThis.open("mailto:shivamsharmasr3623@gmail.com","_blank")}
        className="transition duration-200 group-hover:scale-90 hover:!scale-125 hover:-translate-y-2 w-16 rounded-xl bg-linear-to-b from-blue-400 to-blue-600 flex justify-center items-center p-2.5 aspect-square"
      >
        <img src="/doc_img/mail.svg" />
      </div>

      <div
        onClick={() =>globalThis.open("https://github.com/shivamsharma124") }
        className="transition duration-200 group-hover:scale-90 hover:!scale-125 hover:-translate-y-2 w-16 rounded-xl bg-linear-to-b from-purple-400 to-purple-600 flex justify-center items-center p-2.5 aspect-square"
      >
        <img src="/doc_img/link.svg" />
      </div>

      <div
        onClick={() => openApp('cli')}
        className="transition duration-200 group-hover:scale-90 hover:!scale-125 hover:-translate-y-2 w-16 rounded-xl bg-black flex justify-center items-center p-2.5 aspect-square"
      >
        <img src="/doc_img/cli.svg" />
      </div>

    </footer>
  )
}

export default Doc