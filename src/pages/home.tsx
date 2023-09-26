import React from 'react'
import { Outlet } from "react-router-dom";
import Menu from '../components/menu'

function Home() {
    return (
        <div className='flex flex-col h-full '>
            <div className='text-center fixed bg-white w-full'>
                <Menu />
            </div>
            <div className='mt-12 p-2.5 flex items-center flex-col'>
                <Outlet />
            </div>
            <div className='mt-auto text-center p-2.5'>footer</div>
        </div>
    )
}

export default Home