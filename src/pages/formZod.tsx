import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    email: z.string().email().min(2),
    password: z.string().min(6),
    id: z.string().length(5, { message: "只少要5個字" }),
});

export default function RhfFormWithZod() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    });

    const processForm = async (data: any) => {
        //得到資料後 傳給下面api
        await fetch("/api/form", {
            method: "POST",
            body: JSON.stringify(data)
        });
        console.log(data, '-------------------')

        reset();
    };

    console.log(errors,"654654654as6d54f")
    return (
        <form
            onSubmit={handleSubmit(processForm)}
            className="flex flex-col"
        >
            <h1 className="text-3xl mb-5">react-hook-form & Zod測試</h1>
            <div className="mb-5">
                <label htmlFor="username" className="form-label inline-flex w-48">Email</label>
                <input
                    {...register("email", { required: true })}
                    name="email"
                    type="email"
                />
                {errors.email?.message && <span className="text-red-500">{`${errors.email?.message}`}</span>}
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="form-label inline-flex w-48">密碼</label>
                <input
                    {...register("password", { required: true, minLength: 6 })}
                    name="password"
                    type="password"
                />
                {errors.password?.message && <span className="text-red-500">{`${errors.password?.message}`}</span>}
            </div>
            <div className="mb-5">
                <label htmlFor="id" className="form-label inline-flex w-48">ID</label>
                <input
                    {...register("id", { required: true })}
                    name="id"
                    type="text"
                />
                { errors.id?.message && 'required' && <span className="text-red-500">{`${errors.id?.message}`}</span>}
                
            </div>

            <button
                className="mt-5 border border-solid border-black rounded-2xl"
            >Submit</button>
        </form>
    );
}