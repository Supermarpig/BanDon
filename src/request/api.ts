import { CaptchaAPIRes, LoginAPIReq, LoginAPIRes } from "@/types/api";
import request from "./index"

// 請求中： 請求參數和返回值的類型都需要進行約束

// 驗證碼請求
export const CaptchaAPI = (): Promise<CaptchaAPIRes> => request.get("/prod-api/captchaImage");

// 登錄請求
export const LoginAPI = (params: LoginAPIReq): Promise<LoginAPIRes> => request.post("/login", params);   