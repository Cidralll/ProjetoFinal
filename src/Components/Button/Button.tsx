import React from "react";
import "./Button.scss"; 

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    //onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
    onClick?: () => void;
    children?: React.ReactNode
}

export default function Button({onClick, type, children}: Props) {
    return (
        <button onSubmit={onClick} type={type} className='Button' >
            {children}
        </button>
    )
}