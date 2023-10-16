import React from 'react'
import { Outlet } from "react-router-dom";
import Menu from '../components/menu'

function Home() {
    return (

        <div className='flex flex-col h-full md:flex-row'>
            <div className='text-center  bg-white flex md:w-xs md:bg-inherit md:w-[12vw]'>
                <Menu />
            </div>
            <div className='mt-5 p-2.5 flex items-center  flex-col  md:mt-5 md:w-[85vw]'>
                <Outlet />
            </div>
            {/* <div className='mt-auto text-center p-2.5'>footer</div> */}
        </div>

    )
}

export default Home