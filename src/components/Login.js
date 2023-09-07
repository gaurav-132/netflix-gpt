import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSigninForm,setIsSigninForm] = useState(true);

    const toggleSigninForm = () => {
        setIsSigninForm(!isSigninForm);
    }

    return (
        <div className='relativ'>
            <Header/>
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='background'
                />
            </div>
            <form className='absolute w-2/6 p-12 text-center right-0 left-0 mx-auto mt-36 bg-black bg-opacity-90'>
                <h1 className='font-bold text-3xl text-white text-left '>{isSigninForm ? "Sign In":"Sign Up"}</h1>
                <input
                    type='text' 
                    placeholder='E-mail Address' 
                    className='py-3 pl-2 mt-8 w-full  rounded-sm text-white placeholder-white  focus:outline-none'
                    style={{background:'#333'}}
                />
                {!isSigninForm && 
                    <input
                        type='text' 
                        placeholder='Name' 
                        className='py-3 pl-2 mt-8 w-full  rounded-sm text-white placeholder-white  focus:outline-none'
                        style={{background:'#333'}}
                    />
                }
                <input 
                    type='password' 
                    placeholder='Password' 
                    className='py-3 pl-2 mt-8 w-full rounded-sm text-white placeholder-white  focus:outline-none'
                    style={{background:'#333'}}
                />
                <button className='p-2 mt-8 text-white bg-red-600 w-full rounded-sm'>{isSigninForm ? "Sign In":"Sign Up"}</button>
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