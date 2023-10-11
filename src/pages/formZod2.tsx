import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

/**
* 複雜一點點的情境
* 需要使用者填入信箱、密碼、名稱、年齡等，

* 限制了密碼長度最少要 8 個字元，
* 名稱則是介於 2 - 30 個字元，
* 年齡則是非必填的但是填入時需要是大於零的整數 小於100數字
* 電話要是09XX...然後要10位數

*/


const registerRequestSchema = z.object({
    email: z.string().email({ message: "請輸入正確的E-mail" }),
    password: z.string().min(8, { message: "密碼要超過8位數" }),
    name: z.string().min(2, { message: "中文最少一個字，英文最少兩個字。" }).max(30, { message: "最多30個字" }),
    age: z.number().int({ message: "請輸入整數" }).positive({ message: "請輸入>0的數字" }).lt(100, { message: "請輸入小於100的數字" }).optional(),
    phone: z.string().regex(/^09[0-9]{8}$/, { message: "請輸入正確號碼" }).optional(),
});

/**
 * RegisterRequest目的是創建一個 TypeScript 型別 RegisterRequest，該型別的結構和資料驗證規則是根據 registerRequestSchema 物件中的定義自動推斷生成的。這樣，你可以在程式中使用 RegisterRequest 來表示符合註冊請求資料結構的資料物件，並在編譯時享有 TypeScript 的型別檢查功能。
 */
type RegisterRequest = z.infer<typeof registerRequestSchema>

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterRequest>({
        resolver: zodResolver(registerRequestSchema),
    });

    const submit = async (registerData: any): Promise<void> => {
        //得到資料後 傳給下面api
        await fetch("/api/form", {
            method: "POST",
            body: JSON.stringify(registerData)
        });

        console.log("trigger login action with:", registerData)
    };


    // console.log(errors, "-------------------------------錯誤訊息")

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col max-w-xs w-full ">
            <p>email</p>
            <input {...register('email')} />
            {errors.email?.message && <p className="text-red-500">* {errors.email?.message}</p>}
            <p>password</p>
            <input type="password" {...register('password')} />
            {errors.password?.message && <p className="text-red-500">* {errors.password?.message}</p>}
            <p>name</p>
            <input {...register('name')} />
            {errors.name?.message && <p className="text-red-500">* {errors.name?.message}</p>}
            <p>age</p>
            <input type="number" max={100} {...register('age', { valueAsNumber: true,  required: false })} />
            {errors.age?.message && <p className="text-red-500">* {errors.age?.message}</p>}
            <p>phone</p>
            <input {...register('phone')} />
            {errors.phone?.message && <p className="text-red-500">* {errors.phone?.message}</p>}

            <input type="submit" className="rounded-xl  bg-green-300 " />




        </form>
    );
};

export default LoginForm

