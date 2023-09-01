// 登入頁面：管理員登入系統。
import { ChangeEvent, useEffect, useState } from "react"
import initLoginBg from './init'
import { useNavigate } from "react-router-dom"
import { Input } from '@components/ui/Input';

const Login = (prop: any) => {
    let navigateTo = useNavigate();
    //加載完這個組件之後，需要初始化
    useEffect(() => {
        initLoginBg();
        window.onresize = function () { initLoginBg() };//假設畫面變動時，在自適應畫面
    }, [])
    const [usernameVal, setUsernameVal] = useState("");//定義帳號輸入訊息
    const [passwordVal, setPasswordVal] = useState("");//定義密碼輸入訊息

    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsernameVal(e.target.value)
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value)
    }

    //點擊登錄按鈕事件函數
    const gotoLogin = async () => {
        // console.log("用戶輸入的用戶名，密碼，驗證碼分別是：",usernameVal,passwordVal,captchaVal)
        //登錄前，先驗證是否有空值
        if (!usernameVal.trim() || !passwordVal.trim()) {
            alert("請輸入完整資料")
            return
        }
        //發起登錄請求
        let loginAPIRes = await LoginAPI({
            username: usernameVal,
            password: passwordVal,
            uuid: localStorage.getItem("uuid") as string,
        })

        // console.log(loginAPIRes);
        if (loginAPIRes.code === 200) {
            //1.提示登錄成功
            alert("登錄成功")
            //2.保存token
            localStorage.setItem("React-management-token", loginAPIRes.token)
            //3.跳轉到/page1
            navigateTo("/page1")
            //4.刪除本地保存中的uuid
            localStorage.removeItem("uuid")
        }


    }


    return (
        <div className="relative">
            {/* <div>這是Login頁面 </div> */}
            <canvas id="canvas" className=""></canvas>
            <div className='absolute top-[25%] left-[50%] -translate-x-2/4 -translate-y-2/4;'>
                {/* 標題部分 */}
                <div className='text-white mb-2.5'>
                    <h1 className="bold text-3xl text-center">DinBanDon</h1>
                    {/* <p className=" text-center">Strive Everyday</p> */}
                </div>
                {/* 表單部分 */}
                <div className="flex flex-col items-center justify-center p-10">
                    {/* <input type="text" className="text-center rounded-lg mb-2.5" placeholder="帳號" onChange={usernameChange} />
                    <input type="text" className="text-center rounded-lg mb-2.5" placeholder="密碼" onChange={passwordChange} /> */}
                    <Input
                        type="text"
                        placeholder={'帳號'}
                        textColor='white'
                        onChange={usernameChange}
                    />
                    <Input
                        type="password"
                        placeholder={'密碼'}
                        textColor='white'
                        onChange={passwordChange}
                    />
                    <button className="bg-white rounded-3xl mt-10 w-[100px] hover:scale-105" onClick={gotoLogin}>登錄</button>

                </div>
                
            </div>
        </div>
    )
}

export default Login