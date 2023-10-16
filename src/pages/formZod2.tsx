import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect } from 'react'
import InputForm from '@components/InputForm'

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
    like: z.array(z.string()).superRefine((val, ctx) => {
        if (val.length > 3) {
            ctx.addIssue({
                code: z.ZodIssueCode.too_big,
                maximum: 3,
                type: "array",
                inclusive: true,
                message: "請不超過 3 項  😡😡😡",
            });
        }

        if (val.length !== new Set(val).size) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `不允許重複選項`,
            });
        }
        if (val.length === 0) {
            ctx.addIssue({
                code: z.ZodIssueCode.too_big,
                maximum: 3,
                type: "array",
                inclusive: true,
                message: "請至少選擇1 項  😡",
            });
        }
    }),
});

/**
 * RegisterRequest目的是創建一個 TypeScript 型別 RegisterRequest，該型別的結構和資料驗證規則是根據 registerRequestSchema 物件中的定義自動推斷生成的。這樣，你可以在程式中使用 RegisterRequest 來表示符合註冊請求資料結構的資料物件，並在編譯時享有 TypeScript 的型別檢查功能。
 */
type RegisterRequest = z.infer<typeof registerRequestSchema>

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
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
        alert('提交表單囉')
        console.log("trigger login action with:", registerData)
    };



    // 處理有效年份 及日期
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState<number[]>([]);
    useEffect(() => {
        //從今年往後25年的選項
        const generateYearOptions = () => {
            const yearOptions = [];
            for (let i = 0; i <= 25; i++) {
                yearOptions.push(currentYear + i);
            }
            setYears(yearOptions);
        };

        generateYearOptions();
    }, [currentYear]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col max-w-xs w-full ">
            <InputForm
                label="這是Email"
                name="email"
                type="email"
                register={register}
                errors={errors}
            />

            <InputForm
                label="password"
                name="password"
                type="password"
                register={register}
                errors={errors}
            />

            <InputForm
                label="name"
                name="name"
                register={register}
                errors={errors}
            />
            {/* 如果要修改register 內新增東西需要寫入一個function 如下↓ */}
            <InputForm
                label="Age"
                name="age"
                type="number"
                defaultValue="0"
                register={(name: any, options: any) => register(name, { ...options, valueAsNumber: true })}
                errors={errors}
            />
            <InputForm
                label="phone"
                name="phone"
                register={register}
                errors={errors}
            />

            <span className="text-green-500 text-xl mt-5 rounded-3xl w-fit">請選擇喜歡的東西</span>
            <div className="p-5">
                <InputForm
                    label="薯條"
                    name="like"
                    type="checkbox"
                    value="薯條"
                    register={register}
                    errors={errors}
                />

                <InputForm
                    label="漢堡"
                    name="like"
                    type="checkbox"
                    value="漢堡"
                    register={register}
                    errors={errors}
                />

                <InputForm
                    label="牛排"
                    name="like"
                    type="checkbox"
                    value="牛排"
                    register={register}
                    errors={errors}
                />
                <InputForm
                    label="豬排"
                    name="like"
                    type="checkbox"
                    value="豬排"
                    register={register}
                    errors={errors}
                />
                <InputForm
                    label="雞排"
                    name="like"
                    type="checkbox"
                    value="雞排"
                    register={register}
                    errors={errors}
                />
                {errors.like?.message && <span className="text-red-500">{`${errors.like?.message}`}</span>}
            </div>




            <input type="submit" className="rounded-xl  bg-green-300 " />



        </form>
    );
};

export default LoginForm

