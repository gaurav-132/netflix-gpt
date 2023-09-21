import React from 'react'

const VideoTitle = (props) => {

  const { title, overview } = props;

  return (
    <div className='pt-36 px-10 absolute text-white'>
        <div>
          <h2 className='text-6xl font-bold'>{title}</h2>
          <p className='py-6 w-1/4 text-lg'>{overview}</p>
        </div>
        <div className=''>
            <button className='bg-slate-500 text-white py-2  px-12 text-lg bg-opacity-50 rounded-lg'>Play</button>
            <button className='mx-2 bg-slate-500 text-white py-2  px-12 text-lg bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle