//表單 react-hook-form  測試

import { useForm, useWatch } from 'react-hook-form'


export default function page() {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
    });//每當變更資料後就能立即判斷是否符合條件

    const onSubmit = (data: any) => {
        //可以寫postAPI 的東西
        console.log(data, "send-data------------------------")
    }

    const watchForm = useWatch({ control });
    console.log(watchForm);
    return (
        <>
            <h1 className="text-3xl mb-5">react-hook-form 測試</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='border rounded-lg border-black border-solid p-5'>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">使用者名稱</label>
                    <input
                        id="username"
                        type="text"
                        defaultValue=""
                        {...register("username", {
                            required: {
                                value: true,
                                message: "請填入使用者名稱",
                            },
                        })}

                        className={`form-control ml-2.5 rounded-lg border border-black border-solid px-2.5 
                        ${errors.username && "border-red-500"}`
                        }
                    />

                    {errors.username && (
                        <div className="text-red-500">* {`${errors.username.message}`}</div>
                    )}
                    {/* 在這邊加上&&可以確保errors.username的值為null 或 undefined
          時避免產生錯誤 */}

                </div>
                {/* <div className="mb-3">
                    <label
                        htmlFor="userNumber"
                        className={`form-label`}
                    >編號</label>
                    <input
                        id="userNumber"
                        type="text"
                        defaultValue="230150"
                        {...register("userNumber", { required: true })}
                        className={`form-control ml-2.5 rounded-lg border border-black border-solid px-2.5 ${errors.userNumber && "border-red-500"}`}
                    />
                    {errors.userNumber && <div className="text-red-500">* 請填入編號</div>}
                </div> */}
                <div className="mb-3">
                    <label
                        htmlFor="password"
                        className={`form-label`}
                    >密碼</label>
                    <input
                        id="password"
                        type="password"
                        defaultValue=""
                        {...register("password", {
                            required: {
                                value: true,
                                message: "請填入你的密碼",
                            },
                            maxLength: {
                                value: 12,
                                message: "密碼最多為12碼",
                            },
                            minLength: {
                                value: 6,
                                message: "密碼至少要6碼",
                            },
                        })}
                        className={`form-control ml-2.5 rounded-lg border border-black border-solid px-2.5 ${errors.password && "border-red-500"}`}
                    />
                    {errors.password && <div className="text-red-500">* {`${errors.password.message}`}</div>}
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input
                            id="checkList1"
                            type="checkbox"
                            className="form-check-input mr-2.5"
                            value="薯條"
                            {...register("like", { required: true })}
                        />
                        <label htmlFor="checkList1" className={`form-check-label relative bottom-6 ${errors.like && "text-red-500"}`}>
                            薯條
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            id="checkList2"
                            type="checkbox"
                            className="form-check-input mr-2.5"
                            value="漢堡"
                            {...register("like", { required: true })}
                        />
                        <label htmlFor="checkList2" className={`form-check-label relative bottom-6 ${errors.like && "text-red-500"}`}>
                            漢堡
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            id="checkList3"
                            type="checkbox"
                            {...register("like", { required: true })}
                            className={` mr-2.5
                            ${errors.like && "border-red-500"}
                            `}
                            value="牛排"
                        />
                        <label htmlFor="checkList3" className={`form-check-label relative bottom-6 ${errors.like && "text-red-500"}`}>
                            牛排
                        </label>
                    </div>
                    {errors.like && <div className="text-red-500">* 請至少填入一項</div>}
                </div>
                <button type="submit" className="btn btn-primary border-black border border-solid rounded-3xl px-5">送出表單</button>
            </form>

        </>
    )
}