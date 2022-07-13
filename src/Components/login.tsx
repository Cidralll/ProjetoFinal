import { useState } from "react";
import Button from "./Button/Button";
import { ImgBackground } from "./img-background/img";
import { ImgPassword } from "./img-input/img-password";
import { ImgUser } from "./img-input/img-user";
import Inputs from "./inputs/input-form";
import InputPassword from "./inputs/input-password";
import { ImgLogoCompass } from "./Logo-Compass/Logo-Compass";

interface Props {
    
}


export default function Login() {
    let [userValue, setUserValue] = useState('');
    const handleInputUserValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserValue(event.currentTarget.value)
    }

    let [passwordValue, setPasswordValue] = useState('');
    const handleInputPasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.currentTarget.value)
    }

    let [inputsValue, setInputsValue] = useState(['']);
    const valueInputs = (event: React.MouseEvent<HTMLButtonElement>) => {
        setInputsValue([userValue, passwordValue])
        console.log(inputsValue)
    }

    return (
        <main className='body-main'>
            <section>
                
            </section>

            <section className='section-inputs'>
                <h1>Olá,</h1>
                <p className='sub-title'>Para continuar navegando de forma segura, efetue o login na rede.</p>

                <p className='login'>Login</p>

                <div className='div-user'>
                <Inputs onChange={handleInputUserValue} value={userValue}></Inputs>
                <ImgUser />
                </div>
                <div className='div-password'>
                <InputPassword onChange={handleInputPasswordValue} value={passwordValue} />
                <ImgPassword />
                </div>

                <Button type='submit' onSubmit={valueInputs} >
                Continuar  
                </Button> 
            </section>

            <section className='section-img'>
                <ImgBackground />
                
                <ImgLogoCompass/>
            </section>
      

    </main>
    )
}