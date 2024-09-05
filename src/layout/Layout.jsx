import React, { useEffect, Suspense, Fragment, useRef } from "react";
import useWidth from "../Hooks/useWidth";
import useSidebar from "../Hooks/useSidebar";
import useMenuHidden from "../Hooks/useMenuHidden";
import { Sidebar } from "../components/SideBar/Sidebar";
import BottomTab from "../components/BottomTab/BottomTab";
import Header from "../components/Header/Header";
import MainContent from "../components/MainContent/MainContent";

const Layout = () => {

  const { width, breakpoints } = useWidth();

  return (
    <>

      <div style={{ width: "100vw", height: "100vh" }} className="flex">

        {/* sidebar */}
        <Sidebar />

        {/* middlebar */}
        <div className={`w-full flex-col   h-[100%]  relative `}>

          <div className={`h-[100%]  mb-14 `}>

            {/* header */}
            {
              width <= breakpoints.sm ? <Header /> : ""
            }


            {/* main content */}
            <MainContent />

          </div>

          {/* mottom tab */}
          {
            width < breakpoints.sm ? <BottomTab /> : ""
          }

        </div>
      </div>
    </>
  );
};

export default Layout;
