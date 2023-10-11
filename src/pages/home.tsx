import React from 'react'
import { Outlet } from "react-router-dom";
import Menu from '../components/menu'

function Home() {
    return (
        <>
            <div className='flex flex-col h-full '>
                <div className='text-center fixed bg-white w-full md:w-xs md:bg-inherit'>
                    <Menu />
                </div>
                <div className='mt-16 p-2.5 flex items-center flex-col md:mt-5'>
                    <Outlet />
                </div>
            </div>
            {/* <div className='mt-auto text-center p-2.5'>footer</div> */}
        </>
    )
}

export default Home