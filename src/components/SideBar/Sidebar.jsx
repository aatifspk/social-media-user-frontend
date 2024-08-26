import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';
import SimpleBar from 'simplebar-react';
import NavMenu from './NavMenu';
import useWidth from '../../Hooks/useWidth';

export const Sidebar = () => {
  const { width, breakpoints } = useWidth();
  const scrollableNodeRef = useRef();
  const [scroll, setScroll] = useState(false);

  // Add smooth transition to the sidebar width
  const sidebarWidth = width < breakpoints.lg ? "w-[60px]" : "w-[238px]";

  // Handle scroll to show/hide the shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableNodeRef.current.scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    scrollableNodeRef.current?.addEventListener("scroll", handleScroll);
  }, [scrollableNodeRef]);

  return (
    <>
      {width >= breakpoints.sm && (
        <div
          className={`${sidebarWidth} bg-white h-full border-r-2 border-slate-200 transition-all duration-300 ease-in-out`}
        >
          {/* Logo */}
          <Logo />


          {/* Navigation items */}
          <SimpleBar
            className="px-4 w-[100%] h-[100%]  "
          >
            <NavMenu />
          </SimpleBar>
        </div>
      )}
    </>
  );
};
