import './styles/globals.css'
import { useEffect } from 'react'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from "./router"

//去網登錄頁面
function ToLogin() {
  const navigateTo = useNavigate();
  //加載完這個組件之後實現跳轉
  useEffect(() => {
    //加載完組件之後，執行這邊的代碼
    navigateTo("/login")
    alert('您還沒有登陸 ，請登錄後再訪問')
  }, [])
  return <></>
}
//去往首頁
function ToPage1() {
  const navigateTo = useNavigate();
  //加載完這個組件之後實現跳轉
  useEffect(() => {
    //加載完組件之後，執行這邊的代碼
    navigateTo("/page1")
    alert('您已經登錄過了!!!')
  }, [])
  return <></>
}

function BeforeRouterEnter() {
  const outlet = useRoutes(router);

  const location = useLocation();
  let token = localStorage.getItem("React-management-token");

  //對於後臺管理系統，兩中經典的跳轉情況
  //1.如果訪問的是登錄頁面，並且有token，跳轉至首頁
  if (location.pathname == "/login" && token) {
    //這裡不能直接useNavigete 來實現跳轉，因為需要BeforeRoutterEnter是一個JSX組件
    return <ToPage1 />
  }
  //2.如果訪問的不是登錄頁面，並且沒有token，跳轉到登錄頁面
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />
  }
  //3.其餘的都可以正常放行
  return outlet
}




const App = () => {
  return (
    <>
      <BeforeRouterEnter />
    </>
  )
}

export default App
