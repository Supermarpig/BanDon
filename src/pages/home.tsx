import React from 'react'
import { Outlet } from "react-router-dom";

function home() {
    return (
        <div className='flex flex-col h-full p-2.5'>
            <div className='text-center'>header</div>
            <Outlet />
            <div className='mt-auto text-center p-2.5'>footer</div>
        </div>
    )
}

export default home