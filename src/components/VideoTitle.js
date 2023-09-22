import React from 'react'

const VideoTitle = (props) => {

  const { title, overview } = props;

  return (
    <div className='w-full aspect-video pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black'>
        <div>
          <h2 className='text-6xl font-bold'>{title}</h2>
          <p className='py-6 w-1/4 text-lg'>{overview}</p>
        </div>
        <div className=''>
            <button className='bg-white text-black py-2  px-12 text-lg rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='mx-2 bg-slate-500 text-white py-2  px-12 text-md bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle