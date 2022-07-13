import React from "react";
import ValidationUser from "../Validation/user";
import './input-login.scss';

interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void


}

export default function Inputs({value, onChange}: Props) {
    return (
        <input name='user' value={value} placeholder='Usuário' type='text' className="input-login" id='input-user' onChange={onChange}></input>
        
    )
}