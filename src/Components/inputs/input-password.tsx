import React from "react";
import ValidationPassword from "../Validation/password";
import './input-login.scss';

interface Props {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputPassword({onChange}: Props) {
    return (
        <input placeholder='Senha' type='password' className="input-login"  onChange={onChange}></input>
        
    )
}

