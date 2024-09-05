import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { TbSquarePlus } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";






import Icons from '../SideBar/Icons';
import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';




const menuItems = [

    {
        title: "Home",
        icon: <MdHomeFilled className='w-6 h-6' />,
        link: "FiSearch",
    },
   
    {
        title: "Explore",
        icon: <MdOutlineExplore className='w-6 h-6' />,
        link: "category-list",
    },
    {
        title: "Reels",
        icon: <BsCameraReels className='w-6 h-6' />,
        link: "category-list",
    },
    
    {
        title: "Create",
        icon: <TbSquarePlus className='w-6 h-6' />,
        link: "category-list",
    },
    {
        title: "Messages",
        icon: <BiMessageRoundedDetail className='w-6 h-6' />,
        link: "category-list",
    },
   
    {
        title: "Profile",
        icon: <GoHeart className='w-6 h-6' />,
        link: "category-list",
    },
];

const BottomTab = () => {

    const [isDark] = useDarkmode()



    return (
        <div className={`w-[100%]  h-14 sticky bottom-0 border-t-2  ${isDark ? "bg-dark border-blue-gray-800" : "bg-white border-slate-400"}`}>

            <ul className="pb-10 pt-2 flex justify-around ">
                {menuItems.map((item, i) => (
                    <li
                        key={i}
                        className={`nav-item px-4 rounded-md hover:bg-slate-200 transition duration-500`}
                    >
                        <NavLink className="menu-link flex items-center gap-3 py-2" to={item.link}>
                            <span className="menu-icon flex-grow-0">
                                <Icons icon={item?.icon} />
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default BottomTab