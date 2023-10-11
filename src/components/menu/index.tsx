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
        label: '員工',
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
                label: 'page 301',
                key: '/page3/page301',
            },
            {
                label: 'page 302',
                key: '/page3/page302',
            },
            {
                label: 'page 303',
                key: '/page3/page303',
            },

        ]
    },
    {
        label: '測試測試',
        key: '/test',
        icon: '',
        children: [
            {
                label: 'form',
                key: '/test/form',
            },
            {
                label: 'formZod',
                key: '/test/formZod',
            },
            {
                label: 'formZod2',
                key: '/test/formZod2',
            },
            {
                label: '傳訊息通知測試',
                key: '/test/sentToLineNotify',
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


    let firstOpenKeys: string = ""
    function findKey(obj: { key: string }) {
        return obj.key === currentRoute.pathname
    }

    for (let i = 0; i < items.length; i++) {
        //判斷找到找不到
        if (items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
            firstOpenKeys = items[i]!.key as string;
            break
        }
    }

    const [openKeys, setOpenKeys] = useState([firstOpenKeys]);
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
    }

    const styleButton = 'inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'


    return (
        <div>
            <div className='flex justify-center flex-wrap'>
                {items.map((item) => (
                    <ul
                        key={item.key}
                    >
                        <li className='group'>
                            <button className={`${styleButton}  flex flex-col hover:bg-blue-300`}
                                onClick={() => menuClick({ key: item.key })}
                            >
                                {item.label}{item.icon}
                            </button>
                            {item.children && item.children.map((itemData: any, index: number) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => menuClick({ key: itemData.key })}
                                        className={`${styleButton} hidden group-hover:block hover:bg-blue-100 my-2.5 sticky`}
                                    >{itemData.label}</button>
                                )
                            })}
                        </li>

                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Menu;
