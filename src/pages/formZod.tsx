import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
    email: z.string().email().min(2),
    password: z.string().min(6)
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

    const processForm = async (data:any) => {
        //得到資料後 傳給下面api
        await fetch("/api/form", {
            method: "POST",
            body: JSON.stringify(data)
        });

        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(processForm)}
            style={{ display: "flex", flexDirection: "column", width: 500 }}
        >
            <h1 className="text-3xl mb-5">react-hook-form & Zod測試</h1>
            <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                className="border border-solid border-black mb-5 rounded-2xl"
            />
            {errors.email?.message && <span>{`${errors.email?.message}`}</span>}

            <input
                {...register("password", { required: true, minLength: 6 })}
                name="password"
                type="password"
                className="border border-solid border-black rounded-2xl"
            />
            {errors.password?.message && <span>{`${errors.password?.message}`}</span>}

            <button
                className="mt-5 border border-solid border-black rounded-2xl"
            >Submit</button>
        </form>
    );
}