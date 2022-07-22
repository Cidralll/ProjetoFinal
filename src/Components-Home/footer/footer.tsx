import { useEffect, useState } from 'react';
import RemoveToken from '../../token/removeToken';
import './footer.scss';
import {useNavigate} from 'react-router';

export default function FooterHome() {

    // Define tempo inicial para o cronometro
    let newTime = 60;
    // Verifica no local storege se o usuario esta recarregando a pagina, e se ele estiver ele define o tempo para o antigo
    let timeLocalStorege = localStorage.getItem('time');
    if (timeLocalStorege) {
        let oldtime = timeLocalStorege;
        newTime = (parseInt(oldtime) - 1)   
    }

    const history = useNavigate()
    let time = newTime;
    let [stopwatch, setStopwatch] = useState(time);

    function Stopwatch(stopwatch: number) {
        setTimeout(() => {
            if (stopwatch > 0) {
                // Salva no local storege o quanto tempo resta da sessão atual
                let stopwatchString = stopwatch.toString();
                localStorage.setItem('time', stopwatchString)
                // Retorna o valor no tempo - 1
                return setStopwatch(stopwatch - 1) 
            }else {
                // Vai remover o token no final dos 60 segundos
                RemoveToken();
                // Redireciona para home 
                return history('/');
            }
        }, 1000)
    }
    
    useEffect(() => {
        Stopwatch(stopwatch)
    }, [stopwatch])

    return (
        <footer className="footerHome">
            <div className='space1'></div>
            <div className='text-inf'>
                <p className='text'>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar</p>
            </div>
            <div className='div-space'></div>
            <div className='div-refresh'>
                <p className='p-refresh'>Application refresh in</p>
            </div>
            <div className='div-timeNumber'>
                <div className='div-number'>
                    <p>{stopwatch}</p>
                </div>
                <div className='div-seconds'>
                    <p>seconds</p>
                </div>
            </div>
            <div className='space2'></div>
            <div className='div-button1'>
                <button onClick={ () => window.open("https://www.google.com", "_blank")} >Continuar navegando</button>
            </div>
            <div className='div-button2'>
                <button onClick={ () => window.location.href = 'http://localhost:3000/'}>Logout</button>
            </div>
        </footer>
    )
}