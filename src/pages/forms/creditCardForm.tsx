import { Controller, useFormContext } from "react-hook-form";
import { useState, useEffect } from 'react'

const CreditCardForm = () => {

    const { register, watch, control, formState: { errors }, clearErrors } = useFormContext();

    // 監聽表單中 hasCreditCard 的值，並拿出來使用
    const [paymentMethod] = watch(['paymentMethod']);

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
        <div className="my-5">
            <label>
                付款方式：
                <select {...register('paymentMethod')} className='border border-[#f5f5f5] border-solid px-2.5 rounded-md mb-2.5'>
                    <option value="cashOnDelivery">貨到付款</option>
                    <option value="creditCard">信用卡</option>
                </select>
            </label>
            {paymentMethod === 'creditCard' &&
                <div className='flex item-center justify-start flex-wrap mt-5 flex-col'>

                    <div className='flex flex-col mr-5'>
                        <label htmlFor="creditCard" className={`${errors['credit.creditCard'] && " text-red-500"}`}>信用卡卡號</label>
                        <input type="text"
                            id="cardNumber"
                            {...register("credit.creditCard", { required: paymentMethod === 'creditCard' })}
                            className='w-full'
                            maxLength={12}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="safeNumber" className={`${errors['credit.safeNumber'] && " text-red-500"}`}>安全碼</label>
                        <input type="text"
                            id="safeNumber"
                            {...register("credit.safeNumber", { required: paymentMethod === 'creditCard' })}
                            className='w-full'
                            maxLength={3}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="cardDate" className={`${errors['.credit.cardDateYear'] && " text-red-500"}`} >有效期限</label>
                        <div className='flex'>
                            <Controller
                                name="credit.cardDateYear"
                                control={control}
                                rules={{ required: paymentMethod === 'creditCard' }}
                                render={({ field }) => (
                                    <select {...field}>
                                        <option value="0">--</option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            />
                            <Controller
                                name="credit.cardDateMonth"
                                control={control}
                                rules={{ required: paymentMethod === 'creditCard' }}
                                render={({ field }) => (
                                    <select {...field}>
                                        <option value="0">--</option>
                                        {Array.from({ length: 12 }, (_, index) => (
                                            <option key={index + 1} value={index + 1}>
                                                {index + 1}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            />

                        </div>
                    </div>
                </div>
            }
            {paymentMethod === 'cashOnDelivery' &&
                <div>貨到付款支付細節……</div>
            }
        </div>
    )

}

export default CreditCardForm