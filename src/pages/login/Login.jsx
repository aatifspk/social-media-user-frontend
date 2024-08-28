import React from 'react';
import images from '../../constant/images';

import useWidth from '../../Hooks/useWidth';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {

    const { width, breakpoints } = useWidth()



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
                                    <img src={images?.instaLogo} alt="Instagram Logo" className='w-36' />
                                </div>

                                <div className='w-[90%]   rounded-lg flex justify-center items-center mx-auto'>
                                    <div className='w-[100%] space-y-4'>
                                        <input
                                            type="text"
                                            placeholder='Email'
                                            className=' w-[100%] p-2 border-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-100'
                                        />
                                        <input
                                            type="password"
                                            placeholder='Password'
                                            className=' w-[100%] p-2 border-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-100'
                                        />
                                        <button className='bg-cyan-500 text-white w-[100%] py-2 rounded hover:bg-cyan-600 transition duration-200'>
                                            Log in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='w-[100%] '>

                            <div className='sm:border-2 border-gray-300 rounded-sm p-6  max-w-md mx-auto'>
                                <div className='  rounded-lg flex   '>
                                    <h2 className='text-base'>Don't have an account?  <Link to={"/signup"} className='text-blue-500 font-bold'>Sign up</Link></h2>

                                </div>
                            </div>




                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
