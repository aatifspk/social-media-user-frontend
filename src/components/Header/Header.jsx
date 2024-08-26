


import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import logo from "../../assets/logo/Instagram_logo.svg.png"
import useWidth from '../../Hooks/useWidth';
import { GoHeart } from "react-icons/go";
import { FiSearch } from "react-icons/fi";




const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='w-full bg-white h-14 sticky top-[-1px] flex justify-between  px-4 z-[999]'>
            <div className='flex w-[100%] flex-row items-center justify-between'>
                <div className='w-[20%] '>
                    <div className="relative w-[100%]  text-left" ref={dropdownRef}>
                        <div className='flex flex-row justify-center items-center'>
                            <button
                                type="button"
                                className="inline-flex w-[100%] justify-center items-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm "
                                id="menu-button"
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                                onClick={toggleDropdown}
                            >
                                {

                                    <img className='md:w-35 md:h-10' src={logo} alt="" />

                                }
                                <svg
                                    className="-mr-1 h-5 w-[30px] text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div
                            className={`absolute  z-10 mt-2 w-[120%] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform transition ease-in-out duration-200 ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                        >
                            <div className="py-1" role="none">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    id="menu-item-0"
                                >
                                    Following
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    id="menu-item-1"
                                >
                                    Favorites
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[60%] h-[100%]   py-2'>

                    <div className='w-[100%] h-[100%]  flex justify-around  '>


                        {/* search */}
                        <div className='w-[80%] h-[100%]   overflow-hidden'>

                            <div
                                className="inline-flex relative  rounded-md bg-slate-200 h-[100%] w-[100%]  gap-x-10 px-10 py-2 text-sm font-semibold text-gray-900 shadow-sm "
                                id="menu-button"
                                aria-haspopup="true"
                            >
                                <span>
                                    Search
                                </span>

                                <span className='absolute left-2 top-2 bottom-2'>
                                    <FiSearch className='w-5 h-5'/>
                                </span>

                            </div>



                        </div>

                        {/* heart img */}

                        <div className='w-[20%] flex justify-center items-center '>

                            <span className=''>

                                <GoHeart className='w-5 h-5'/>
                            </span>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Header;
