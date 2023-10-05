import React, { lazy } from "react"
import Home from "../pages/home"
import Login from '../pages/login'
const Page1 = lazy(() => import('../pages/page1'))
const Page2 = lazy(() => import('../pages/page2'))
const Page3 = lazy(() => import('../pages/page3'))
const Page301 = lazy(() => import('../pages/page301'))
const Page302 = lazy(() => import('../pages/page302'))
const Page303 = lazy(() => import('../pages/page303'))
const Form = lazy(() => import('../pages/form'))
const FormZod = lazy(() => import('../pages/formZod'))
const TestPage = lazy(() => import('../pages/test'))
const SentToLineNotify = lazy(() => import('../pages/sentToLineNotify'))

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
            {
                path: "/page3/page301",
                element: withLoadingComponent(<Page301 />)
            },
            {
                path: "/page3/page302",
                element: withLoadingComponent(<Page302 />)
            },
            {
                path: "/page3/page303",
                element: withLoadingComponent(<Page303 />)
            },
            {
                path: "/test",
                element: withLoadingComponent(<TestPage />)
            },
            {
                path: "/test/form",
                element: withLoadingComponent(<Form />)
            },
            {
                path: "/test/formZod",
                element: withLoadingComponent(<FormZod />)
            },
            {
                path: "/test/sentToLineNotify",
                element: withLoadingComponent(<SentToLineNotify />)
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