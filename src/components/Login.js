import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

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
                    console.log(user);
                    // ...
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
                    console.log(user+"Logged In");
                    // ...
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
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='background'
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute w-2/6 p-12 text-center right-0 left-0 mx-auto mt-36 bg-black bg-opacity-90'>
                <h1 className='font-bold text-3xl text-white text-left '>{isSigninForm ? "Sign In":"Sign Up"}</h1>
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