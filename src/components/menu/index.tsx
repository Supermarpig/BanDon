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
        label: '香蕉',
        key: '/banana',
        icon: '',
    },
    {
        label: '訂單測試',
        key: 'page1',
        icon: '',
        children: [
            {
                label: '員工',
                key: '/page1',
            },
            {
                label: '菜單',
                key: '/page2',
            },
            {
                label: '訂單表',
                key: '/page3',
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
            {
                label: 'fetchTest',
                key: '/test/fetchTest',
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

    const navigateTo = useNavigate();
    const currentRoute = useLocation();

    const menuClick = (e: { key: any }) => {

        navigateTo(e.key);
    }


    let firstOpenKeys: string = ""
    // function findKey(obj: { key: string }) {
    //     return obj.key === currentRoute.pathname;
    // }

    for (const item of items) {
        if (
            item.children &&
            Array.isArray(item.children) &&
            item.children.length > 0 
            // item.children.some(child => findKey(child))
        ) {
            firstOpenKeys = item.key! as string;
            break;
        }
    }

    const [openKeys, setOpenKeys] = useState([firstOpenKeys]);
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
    }

    const styleButton = 'inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'


    const menuPCstyle='md:flex-col p-5'

    const Logout = () => {
        localStorage.removeItem('React-management-token');
        navigateTo("/login");
    }

    return (
        <div>
            <div className={`flex justify-center flex-wrap ${menuPCstyle}`}>
                {items.map((item) => (
                    <ul
                        key={item.key}
                    >
                        <li className='group'>
                            {item.key === '/Login' ? (
                                <button className={`${styleButton}  flex flex-col hover:bg-blue-300`} onClick={Logout}>
                                    {item.label}{item.icon}
                                </button>
                            ) : (
                                <button
                                    className={`${styleButton}  flex flex-col hover:bg-blue-300`}
                                    onClick={() => menuClick({ key: item.key })}
                                >
                                    {item.label}{item.icon}
                                </button>
                            )}
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
