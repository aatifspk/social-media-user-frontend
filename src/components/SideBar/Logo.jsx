import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/Instagram_logo.svg.png"
import useWidth from '../../Hooks/useWidth';
import { FaInstagram } from "react-icons/fa";


export const Logo = () => {
    const { width, breakpoints } = useWidth();

    return (
        <div className='w-[100%] h-14 bg-white'>
            <Link>
                <div className='flex pl-5 py-3' >

                    {
                        width < breakpoints.lg ?
                            <FaInstagram className='md:h-10' />
                            :
                            <img className='md:w-35 md:h-10' src={logo} alt="" />

                    }

                </div>
            </Link>
        </div>
    )
}
