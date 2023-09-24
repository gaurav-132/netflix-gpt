import React, { useEffect } from 'react'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'


const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
          navigate('/');
        }).catch((error) => {
            navigate('/error');
        });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
          
        //Unsubscribe when component unmount
        return ()=> unsubscribe();
    },[])

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 '>
            <div className='flex md:flex-row justify-between'>
                <div className='md:m-0 w-24 md:w-auto'>
                    <img 
                        src={LOGO}
                        alt='Logo'
                        className='md:w-44'
                    />
                </div>
                {
                    user && (
                        <div className='flex md:justify-between justify-center'>
                            {showGptSearch &&
                                <select onChange={handleLanguageChange} className="px-8 h-8 mt-2 bg-gray-500 text-white rounded-sm outline-none mr-2">
                                    {
                                        SUPPORTED_LANG.map((lang)=>{
                                            return(
                                                <option className='p-0' value={lang.identifier} key={lang.identifier}>{lang.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            }
                            
                            <div className='md:hidden rounded-full bg-red mt-1 flex flex-col'>
                                <span className='bg-white inline-block h-1 w-6 rounded-full mt-1 transition duration-300'></span>
                                <span className='bg-white inline-block h-1 w-6 rounded-full mt-1 transition duration-300'></span>
                                <span className='bg-white inline-block h-1 w-6 rounded-full mt-1 transition duration-300'></span>
                            </div>
        
                            
                            <div className='hidden md:block mt-2 mr-2'>
                                <button className='bg-purple-600 rounded-md text-sm  text-white md:py-2 px-4' onClick={handleGptSearchClick}>{(showGptSearch)?'Home':'GPT Search'}</button>
                            </div>
                            {/* <div className='hidden md:block'>
                                <img className=' w-12 h-12' src={user?.photoURL}></img>
                            </div> */}
                            <div className='hidden md:block mt-2 mr-2'>
                                <button onClick={handleSignOut} className='bg-red-400 rounded-md text-sm  text-white md:py-2 px-4'>Sign Out</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header;