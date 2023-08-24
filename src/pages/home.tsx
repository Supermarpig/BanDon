import React from 'react'
import { Outlet } from "react-router-dom";
import Menu from '../components/menu'

function Home() {
    return (
        <div className='flex flex-col h-full p-2.5'>
            <div className='text-center'>
                header
                <Menu />
            </div>
            <Outlet />
            <div className='mt-auto text-center p-2.5'>footer</div>
        </div>
    )
}

export default Home