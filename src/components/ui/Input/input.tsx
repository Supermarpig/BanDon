import React, { useState } from 'react';

interface InputProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    children?: string;
    type: string;
    textColor?: string;
    borderColor?: string;
    labelColor?: string;
}

const Input = (props: InputProps) => {
    const {
        placeholder,
        onChange,
        children,
        className,
        type,
        textColor = 'inherit',
        borderColor = 'inherit',
    } = props;

    const [isInputEmpty, setInputEmpty] = useState(true);
    const [isInputFocused, setInputFocused] = useState(false); 

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setInputEmpty(inputValue === '');

        if (onChange) {
            onChange(event);
        }
    };

    const handleInputFocus = () => {
        setInputFocused(true); 
    };

    const handleInputBlur = () => {
        setInputFocused(false); 
    };

    return (
        <div className={`relative mb-3 my-2.5`} data-te-input-wrapper-init>
            <input
                type={type}
                className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ${className ? className : ''}`}
                style={{ color: textColor, borderColor: borderColor  }}
                id={placeholder}
                onChange={handleInputChange}
                onFocus={handleInputFocus} 
                onBlur={handleInputBlur} 
            />
            <label htmlFor={placeholder}
                className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out 
                ${isInputFocused || !isInputEmpty ? 'translate-y-[-0.9rem] scale-[0.8] ' : ''}
                `}
                style={{ color: textColor }}
            >{placeholder}</label>
        </div>
    )
}

export default Input;
