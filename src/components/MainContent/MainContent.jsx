import React from 'react'

import { Outlet } from 'react-router-dom'

const MainContent = () => {
  return (
    <div className='w-[100%] h-full    '>
        <Outlet/>
    </div>
  )
}

export default MainContent