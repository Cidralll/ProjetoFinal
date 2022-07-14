import { useEffect, useState } from 'react';
import './footer.scss';

interface Props {
    stopwatch: number | undefined;
}

export default function FooterHome() {
    let [stopwatch, setStopwatch] = useState(60);

    function Stopwatch(stopwatch: number) {
        setTimeout(() => {
            if (stopwatch > 0) {
                stopwatch = stopwatch;
                return setStopwatch(stopwatch - 1) 
            }else {
                return window.location.href = "http://localhost:3000/"
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