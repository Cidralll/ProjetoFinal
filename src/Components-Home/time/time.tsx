import { useEffect, useState } from 'react';
import dayTyped from './day-week';
import monthTyped from './month-typed';
import './time.scss';

export default function Time() {

    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes();

    // Mostra na tela a hora
    let [currentTime, setCurrentTime] = useState(`${hour}:${minutes}`)
    
    // Verifica se mudou os minutos e chama função para passar como parametro a nova hora e minutos
    let [cont, setCont] = useState(0);
    function Cont(hour: number, minutes: number) {
        let aux = cont + 1;
        let newDate = new Date()
        let newMinute = newDate.getMinutes()

        if (minutes !== newMinute) {
            Time(hour, newMinute)
            setTimeout(() => {
                setCont(aux);
            }, 10000)
            
        }

        if (minutes === newMinute) {
            setTimeout(() => {
                Cont(hour, minutes)
            }, 10000)
        }

        if(minutes < 10) {
            Time(hour, newMinute)
            setCont(aux);
        }

    }

    // função para passar novo horario
    function Time(hour: number, minutes: number) {
        if (hour > 0 && hour < 24 && minutes > 60) {
            return setCurrentTime(`${hour + 1}:${minutes}`)
        } else if (hour > 23) {
            return setCurrentTime(`${hour = 0}:${minutes}`)
        }

        if (minutes < 60) {
            if (minutes < 10) {
                return setCurrentTime(`${hour}:0${minutes}`)
            } else if (minutes > 9) {
                return setCurrentTime(`${hour}:${minutes}`)
            }
        }
    }

    // escuta se teve mudança no cont e se teve executa a função novamente
    useEffect(() => {
        setTimeout(() => {
            Cont(hour, minutes)
        }, 100)
    }, [cont])

    // Mostrando data 
    let  dayNumber = date.getDay();
    let day = dayTyped(dayNumber); 
    let  dayDate = date.getDate();
    let monthNumber = (date.getMonth()) + 1;
    let month = monthTyped(monthNumber);
    let year = date.getFullYear();
    let dateView = (`${day}, ${dayDate} de ${month} de ${year}`)

    return (
        <div className="div-time">
            <h1>{`0${currentTime}`}</h1>
            <p>{dateView}</p>
        </div>
    )
}