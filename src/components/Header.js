import React, { useEffect } from 'react'
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

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

    return (
        <div className='w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
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