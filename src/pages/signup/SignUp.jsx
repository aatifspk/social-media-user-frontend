import React from 'react';
import images from '../../constant/images';
import logoWhite from "../../assets/logo/instgram_logo_white.png"


import useWidth from '../../Hooks/useWidth';
import { Link } from 'react-router-dom';
import useDarkmode from '../../Hooks/useDarkMode';

const SignUp = () => {

    const { width, breakpoints } = useWidth();
    const [isDark] = useDarkmode()



    return (
        <div className=' min-h-screen w-full flex justify-center '>
            <div className='w-ful h-fulll sm:w-[100%] md:w-[60%] '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                    {/* image div */}
                    {
                        width < breakpoints?.md ? "" :
                            <div className=' h-full flex items-center justify-center relative'>
                                <div className='relative'>
                                    <img
                                        src={images?.loginImage2}
                                        alt="loginImg2"
                                        className='relative z-10 w-[80%] sm:w-[60%] md:w-[90%] lg:w-[90%]'
                                    />
                                </div>
                            </div>

                    }

                    {/* form div */}
                    <div className='  h-full w-[100%] flex flex-col justify-center items-center  '>

                        <div className='w-[100%] mb-3'>

                            <div className='sm:border-2  border-gray-300 rounded-sm p-6  max-w-md mx-auto'>
                                <div className='flex justify-center py-6'>
                                    <img src={isDark ? logoWhite : images?.instaLogo} alt="Instagram Logo" className='w-36' />

                                </div>

                                <div className='w-[90%]   rounded-lg flex justify-center items-center mx-auto'>
                                    <div className='w-[100%] space-y-4'>
                                        <input
                                            type="text"
                                            placeholder='Email'
                                            className={`w-[100%] ${isDark ? "bg-mediumDark text-light" : "border-2 text-dark"}  p-2  rounded focus:outline-none focus:ring-2 focus:ring-cyan-100`}

                                        />
                                        <input
                                            type="text"
                                            placeholder='First Name'
                                            className={`w-[100%] ${isDark ? "bg-mediumDark text-light" : "border-2 text-dark"}  p-2  rounded focus:outline-none focus:ring-2 focus:ring-cyan-100`}

                                        />
                                        <input
                                            type="text"
                                            placeholder='Last Name'
                                            className={`w-[100%] ${isDark ? "bg-mediumDark text-light" : "border-2 text-dark"}  p-2  rounded focus:outline-none focus:ring-2 focus:ring-cyan-100`}

                                        />
                                        <input
                                            type="password"
                                            placeholder='Password'
                                            className={`w-[100%] ${isDark ? "bg-mediumDark text-light" : "border-2 text-dark"}  p-2  rounded focus:outline-none focus:ring-2 focus:ring-cyan-100`}

                                        />
                                        <button className='bg-cyan-500 text-white w-[100%] py-2 rounded hover:bg-cyan-600 transition duration-200'>
                                           Sign up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='w-[100%] '>

                            <div className='sm:border-2 border-gray-300 rounded-sm p-6  max-w-md mx-auto'>
                                <div className='  rounded-lg flex   '>
                                    <h2>Already have an account? <Link to={"/login"} className='text-blue-500 font-bold'>Log in</Link> </h2>

                                </div>
                            </div>




                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
