import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"

export interface MenuProps extends MenuChild {
    label?: string;
    key?: string;
    icon?: React.ReactNode;
    children?: MenuChild[];
}
export interface MenuChild {
    label?: string;
    key?: string;
}
const items: MenuProps[] = [
    {
        label: '名單',
        key: '/Page1',
        icon: '',
    },
    {
        label: '菜單',
        key: '/Page2',
        icon: '',
    },
    {
        label: '訂單表',
        key: 'page3',
        icon: '',
        children: [
            {
                label: '欄位 301',
                key: '/page3/page301',
            },
            {
                label: '欄位 302',
                key: '/page3/page302',
            },
            {
                label: '欄位 303',
                key: '/page3/page303',
            },

        ]
    },
    {
        label: '登出',
        key: '/Login',
        icon: '',
    },
]


const Menu = (props: MenuProps) => {

    const navigateTO = useNavigate();
    const currentRoute = useLocation();

    const menuClick = (e: { key: any }) => {

        navigateTO(e.key);
    }

    return (
        <div>
            <ul className='flex justify-center flex-wrap'>
                {items.map((item) => (
                    <li
                        key={item.key}
                        onClick={() => menuClick({ key: item.key })}
                    >
                        <button className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]' >
                            {item.label}{item.icon}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
