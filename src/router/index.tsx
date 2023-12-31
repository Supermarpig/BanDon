import React, { lazy } from "react"
import Home from "../pages/home"
import Login from '../pages/login'
const Page1 = lazy(() => import('../pages/page1'))
const Page2 = lazy(() => import('../pages/page2'))
const Page3 = lazy(() => import('../pages/page3'))
const Page301 = lazy(() => import('../pages/page301'))
const Page302 = lazy(() => import('../pages/page302'))
const Page303 = lazy(() => import('../pages/page303'))
const Banana = lazy(() => import('../pages/banana'))
const Form = lazy(() => import('../pages/test/form'))
const FormZod = lazy(() => import('../pages/test/formZod'))
const FormZod2 = lazy(() => import('../pages/test/formZod2'))
const TestPage = lazy(() => import('../pages/test/test'))
const FetchTest = lazy(() => import('../pages/test/fetchTest'))
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
                path: "/banana",
                element: withLoadingComponent(<Banana />)
            },
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
                path: "/test/FormZod2",
                element: withLoadingComponent(<FormZod2 />)
            },
            {
                path: "/test/sentToLineNotify",
                element: withLoadingComponent(<SentToLineNotify />)
            },
            {
                path: "/test/fetchTest",
                element: withLoadingComponent(<FetchTest />)
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
        element: <Navigate to="/404" />
    }
]

export default routes