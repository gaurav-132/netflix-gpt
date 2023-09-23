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
        <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
            <div className='flex justify-between'>
                <div>
                    <img 
                        src={LOGO}
                        alt='Logo'
                        className='w-44'
                    />
                </div>
                {
                    user && (
                        <div className='flex justify-between'>
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
                            <div className='mt-2 mr-2'>
                                <button className='bg-purple-600 rounded-md text-white py-1 px-4' onClick={handleGptSearchClick}>{(showGptSearch)?'Home':'GPT Search'}</button>
                            </div>
                            <div>
                                <img className='w-12 h-12' src={user?.photoURL}></img>
                            </div>
                            <div>
                                <button onClick={handleSignOut} className='font-bold bg-red-400 text-white p-2'>Sign Out</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header;