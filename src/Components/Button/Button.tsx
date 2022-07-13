import React from "react";
import "./Button.scss"; 

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
    children?: React.ReactNode
}

export default function Button({onSubmit, type, children}: Props) {
    return (
        <button onSubmit={onSubmit} type={type} className='Button' >
            {children}
        </button>
    )
}