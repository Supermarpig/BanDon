import React, { lazy } from "react"
import Home from "../pages/home"
import Login from '../pages/login'
const Page1 = lazy(() => import('../pages/page1'))
const Page2 = lazy(() => import('../pages/page2'))
const Page3 = lazy(() => import('../pages/page3'))

//Navigate重定向組件
import { Navigate } from "react-router-dom"


const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [

    //router 開始-------------------
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/page3",
                element: withLoadingComponent(<Page3 />)
            },

        ]
    },
    //router 結束-------------------
    {
        path: "/login",
        element: <Login />
    },
    //假設User隨便輸入不是裡面的網址  返回page1 ，專門去寫一個404頁面也可以
    {
        path: "*",
        element: <Navigate to="/page1" />
    }
]

export default routes