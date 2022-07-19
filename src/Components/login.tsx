import '../styles/components/font.scss';
import { useEffect, useState } from "react";
import Button from "./Button/Button";
import { ImgBackground } from "./img-background/img";
import addImagePassword from "./img-input/add-imagePassword";
import addImageUser from "./img-input/add-imageUSer";
import { ImgPassword } from "./img-input/img-password";
import { ImgUser } from "./img-input/img-user";
import removeImageUser from "./img-input/remove-imageUser";
import removeImagePassword from "./img-input/remove-imgPassword";
import Inputs from "./inputs/input-form";
import InputPassword from "./inputs/input-password";
import { ImgLogoCompass } from "./Logo-Compass/Logo-Compass";
import ValidationPassword from "./Validation/password";
import './Validation/span.scss'
import ValidationUser from "./Validation/user";
import SpanRegisterLogin from './span-register/span-register';
import LoginUser from './Login-API/loginAPI';
import {useNavigate} from 'react-router';
import RemoveToken from '../token/removeToken';


export default function Login() {

    // Remove o token caso o usuario volte para login
    useEffect(() => {
        RemoveToken();
    }, [])

    const history = useNavigate()
    //Recebe valor do input do usuario
    let [userValue, setUserValue] = useState('');
    const handleInputUserValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserValue(event.currentTarget.value);
        //Remove img do lado de fora do input
        removeImageUser();
        // Add img dentro do input
        addImageUser()
    }

    // Recebe o valor do input de password
    let [passwordValue, setPasswordValue] = useState('');
    const handleInputPasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.currentTarget.value);
        // Remove img do lado de fora do input
        removeImagePassword();
        // Adiciona img dentro do input
        addImagePassword()
    }

    // Recebe o estado do span de erro
    let [errorUser, setErrorUser] = useState(false);
    let [errorPassword, setErrorPassword] = useState(false);
    // função anonima para chamar funções que validam os campos usuario e de senha
    const valueInputs = async (event: React.FormEvent) => {
        event.preventDefault();

        // valida senha
        let validationPassword = ValidationPassword(passwordValue);
        if (!validationPassword) {
            setErrorPassword(true); 
        }else if (validationPassword) {
            setErrorPassword(false);
        }

        // valida password
        let validationUser = ValidationUser(userValue);
        if (!validationUser) {
            setErrorUser(true);
        }else if (validationUser) {
            setErrorUser(false)
        }

        // se estiver tudo certo passa para pagina home
        if (validationPassword && validationUser) {
            // Verifica se o usuario e a senha exitem / estão corretos
            let isAuth = await LoginUser(userValue, passwordValue);
            // Se usuario ou senha estiverem errados ou usuario não for cadastrado vai rerornar erro
            if (!isAuth) {
                setErrorUser(true);
            }else if (isAuth) {
                setErrorUser(false);
                history('/home');
            }
        }
    }
    // Valida se existe erro em span
    let [spanError, setSpanError] = useState('');
    function SpanError(error: boolean) {
        if (error) {
            //se erro for true ele retorna class de erro e passa mensagem do erro
            let inputUser = document.getElementById('input-user');
            inputUser?.classList.add('spanInputError');
            let inputPassword = document.getElementById('input-password')
            inputPassword?.classList.add('spanInputError')
            return setSpanError('Ops, usuário ou senha inválidos. Tente novamente!')
        }else if (!error) {
            // se não existir erro ele remove a classe erro e não reotna msg de erro
            let inputUser = document.getElementById('input-user');
            inputUser?.classList.remove('spanInputError');
            let inputPassword = document.getElementById('input-password')
            inputPassword?.classList.remove('spanInputError')
            return setSpanError('')
        }
    }
    // Se mudar o estado de usuario ou senha ele chama a validação
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
                    <div>
                        <SpanRegisterLogin />
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