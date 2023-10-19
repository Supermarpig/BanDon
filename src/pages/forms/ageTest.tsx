import { useFormContext } from "react-hook-form";

const AgeForm = () => {

    const { register, watch, formState: { errors }, } = useFormContext();

    const divCSS =`border border-solid border-black rounded p-5`

    return (
        <>
            <label htmlFor="hasAge">你滿18了嗎?!!!</label>
            <select {...register("hasAge")}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>

            {watch("hasAge") === "yes" && (
                <div className="p-5">
                    <label htmlFor="ageTest" className={`${errors['ageTest'] && " text-red-500"}`}>請輸入實際年齡</label>
                    <input {...register("ageTest", { required: true })} />
                </div>
            )}



            <div className={divCSS}>

                耶黑

            </div>
        </>
    )

}

export default AgeForm