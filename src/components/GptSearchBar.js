import React from 'react';
import lang from '../utils/languageContant';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {

	const langKey = useSelector((store) => store.config.lang)

    return (
      <div className=' pt-[10%] flex justify-center'>
          <form className='w-1/2 grid grid-cols-12'>
              <input type='text' className='py-2 px-4  m-4 rounded-3xl col-span-10 ' placeholder={lang[langKey].gptSearchPlaceholder}/>
              <button className='py-1 m-4 px-4 bg-red-500 text-white col-span-2 rounded-3xl'>{lang[langKey].search}</button>
          </form>
      </div>
    )
}

export default GptSearchBar;