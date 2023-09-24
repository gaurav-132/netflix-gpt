import React from 'react'

const VideoTitle = (props) => {

  const { title, overview } = props;

  return (
    <div className='w-full aspect-video pt-[12%] px-8 md:px-10 absolute text-white bg-gradient-to-r from-black'>
        <div>
          <h2 className='text-2xl md:text-6xl font-bold'>{title}</h2>
          <p className='py-6 w-1/4 text-lg hidden md:inline-block'>{overview}</p>
        </div>
        <div className='mt-2 md:pt-0'>
            <button className='bg-white text-black py-1 md:py-2 px-6  md:px-12 text-lg rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='mx-2 hidden md:inline-block bg-slate-500 text-white py-2 px-6  md:px-12 text-md bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle