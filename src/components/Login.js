import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NETFLIX_BACK_URL } from '../utils/constants';

const Login = () => {

    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

    const dispatch = useDispatch();

    const email = useRef("");
    const password = useRef("");
    const name = useRef("");

    const toggleSigninForm = () => {
        setIsSigninForm(!isSigninForm);
    }

    const handleBtnClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;
        
        if(!isSigninForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/109432749?s=400&u=018c2376b2f67c643335adc40526ddb90587e811&v=4"
                      }).then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
                            )                            
                      }).catch((error) => {
                          setErrorMessage(error.message)
                      });
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                    // ..
                });
        }else {
            signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }

    }

    return (
        <div className='' style={{width:'100%', backgroundColor:'#000'}}>
            <Header/>
            <div className='absolute'>
                <img src={NETFLIX_BACK_URL}
                    alt='background'
                    className='h-screen object-cover md:w-screen'
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute w-[90%] md:w-2/6 p-12 text-center right-0 left-0 mx-auto mt-36 bg-black bg-opacity-90'>
                <h1 className='font-semibold md:font-bold text-2xl md:text-3xl text-white text-left '>{isSigninForm ? "Sign In":"Sign Up"}</h1>
                <input
                    ref={email}
                    type='text' 
                    placeholder='E-mail Address' 
                    className='py-3 pl-2 mt-8 w-full  rounded-sm text-white placeholder-white  focus:outline-none'
                    style={{background:'#333'}}
                />
                {!isSigninForm && 
                    <input
                        ref={name}
                        type='text' 
                        placeholder='Name' 
                        className='py-3 pl-2 mt-8 w-full  rounded-sm text-white placeholder-white  focus:outline-none'
                        style={{background:'#333'}}
                    />
                }
                <input 
                    ref={password}
                    type='password' 
                    placeholder='Password' 
                    className='py-3 pl-2 mt-8 w-full rounded-sm text-white placeholder-white  focus:outline-none'
                    style={{background:'#333'}}
                />
                <p className='text-red-400 mt-6'>{errorMessage}</p>
                <button className='p-2 mt-6 text-white bg-red-600 w-full rounded-sm' onClick={handleBtnClick}>{isSigninForm ? "Sign In":"Sign Up"}</button>
                <p className='py-4 text-white cursor-pointer' onClick={toggleSigninForm}>
                    {isSigninForm ? 
                        "New to Netflix? Sign Up Now"
                        :
                        "Already Registered Sign in Now"
                    }
                </p>
            </form>
            
        </div>
    )
}

export default Login;