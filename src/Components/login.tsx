import { useEffect, useState } from "react";
import Button from "./Button/Button";
import { ImgBackground } from "./img-background/img";
import { ImgPassword } from "./img-input/img-password";
import { ImgUser } from "./img-input/img-user";
import Inputs from "./inputs/input-form";
import InputPassword from "./inputs/input-password";
import { ImgLogoCompass } from "./Logo-Compass/Logo-Compass";
import ValidationPassword from "./Validation/password";
import './Validation/span.scss'
import ValidationUser from "./Validation/user";


export default function Login() {
    let [userValue, setUserValue] = useState('');
    const handleInputUserValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserValue(event.currentTarget.value)
    }

    let [passwordValue, setPasswordValue] = useState('');
    const handleInputPasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.currentTarget.value)
    }

    let [errorUser, setErrorUser] = useState(false);
    let [errorPassword, setErrorPassword] = useState(false);
    const valueInputs = (event: React.FormEvent) => {
        event.preventDefault();

        let validationPassword = ValidationPassword(passwordValue);
        if (!validationPassword) {
            setErrorPassword(true); 
        }else if (validationPassword) {
            setErrorPassword(false);
        }

        let validationUser = ValidationUser(userValue);
        if (!validationUser) {
            setErrorUser(true);
        }else if (validationUser) {
            setErrorUser(false)
        }

        if (validationPassword && validationUser) {
            window.location.href = 'http://localhost:3000/home';
        }

    }
    let [spanError, setSpanError] = useState('');
    function SpanError(error: boolean) {
        if (error) {
            return setSpanError('Ops, usuário ou senha inválidos. Tente novamente!')
        }else if (!error) {
            return setSpanError('')
        }
    }
    useEffect(() => {
        SpanError(errorPassword)
    }, [errorPassword])
    useEffect(() => {
        SpanError(errorUser)
    }, [errorUser])


    return (
        <main className='body-main'>

            <section className='section-inputs'>
                <h1>Olá,</h1>
                <p className='sub-title'>Para continuar navegando de forma segura, efetue o login na rede.</p>

                <p className='login'>Login</p>
                <form onSubmit={valueInputs}>
                    <div className='div-user'>
                    <Inputs onChange={handleInputUserValue} value={userValue}></Inputs>
                    <ImgUser />
                    </div>
                    <div className='div-password'>
                    <InputPassword onChange={handleInputPasswordValue} value={passwordValue} />
                    <ImgPassword />
                    
                    </div>
                    <div className="divMsgError">
                        <span className="MsgError" >{spanError}</span>
                    </div>
                    <Button type='submit' >
                        Continuar  
                    </Button> 
                </form>
            </section>

            <section className='section-img'>
                <ImgBackground />
                
                <ImgLogoCompass/>
            </section>
      

    </main>
    )
}