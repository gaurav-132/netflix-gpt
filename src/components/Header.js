import React from 'react'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
          navigate('/');
        }).catch((error) => {
            navigate('/error');
        });
    }

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
            <div className='flex justify-between'>
                <div>
                    <img 
                        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                        alt='Logo'
                        className='w-44'
                    />
                </div>
                {
                    user && (
                        <div className='flex justify-between'>
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