import React from "react";

interface InputFormProps {
    label: string;
    name: string;
    type?: string;
    value?: string;
    register: any;
    errors: any;
    defaultValue?: string;
}

const InputForm: React.FC<InputFormProps> = ({ label, name, type, value, register, errors, defaultValue }) => {
    return (
        <>
            <div className={`mb-5 ${type === 'checkbox' ? 'flex item-center' : ''}`}>
                {/* <label htmlFor={name} className="form-label inline-flex w-48"> */}
                <label htmlFor={name} className={`form-label inline-flex w-48 ${errors[name] && "text-red-500"}`}>
                    {label}
                </label>
                <input
                    {...register(name, { required: false })}
                    type={type}
                    value={value}
                    defaultValue={defaultValue}
                    className="my-auto"
                />
            </div>
            {type !== 'checkbox' && errors[name]?.message && (
                <span className="text-red-500">{`${errors[name]?.message}`}</span>
            )}


        </>

    );
};

export default InputForm;
