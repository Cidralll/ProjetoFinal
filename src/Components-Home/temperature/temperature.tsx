import './temperature.scss'
import React, { Fragment, useState, useEffect} from 'react'
import axios from 'axios';

export default function Temperature() {

    // Consumindo API de clima 
    const [location, setLocation] = useState(false);
    const [weather = 0, setWeather]   = useState();
    const [temp = 0, setTemp] = useState();
    const [city, setCity] =useState();

    let getWeather = async (lat: any, long: any) => {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${'0794218f101559448d955ce92201ba2e'}` , {
            params: {
                lat: lat,
                lon: long,
                applid: '0794218f101559448d955ce92201ba2e',
                lang: 'pt',
                units: 'metric'
            }
        })
        setWeather(res.data);
        setTemp(res.data['main']['temp'])
        setCity(res.data['name'])
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true);
        })
    },[])

    // Buscando dados de SP
    const [tempSP = 0, setTempSP] = useState();
    const [citySP, setCitySP] =useState();
    let getWeatherSaoPaulo = async (lat: any, long: any) => {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${'0794218f101559448d955ce92201ba2e'}` , {
            params: {
                lat: lat,
                lon: long,
                applid: '0794218f101559448d955ce92201ba2e',
                lang: 'pt',
                units: 'metric'
            }
        })
        setTempSP(res.data['main']['temp'])
        setCitySP(res.data['name'])
    }

    useEffect(() => {
        let lat = -23.5489;
        let long = -46.6388;
        getWeatherSaoPaulo(lat, long);
            
        
    },[])


    if (location === false) {
        return(
            <div className="div-temperature">
                <div className="div-city">
                    <p>{citySP}</p>
                </div>
    
                <div className="div-img-temp">
                    <div style={{
                        backgroundImage: `url(${"/img/cloudy.png"})`,
                    }}
                        className='img-cloudy'
                    >
                    </div>
                    <div className="div-temp">
                        <p>{Math.trunc(tempSP)}°</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="div-temperature">
                <div className="div-city">
                    <p>{city}</p>
                </div>
    
                <div className="div-img-temp">
                    <div style={{
                        backgroundImage: `url(${"/img/cloudy.png"})`,
                    }}
                        className='img-cloudy'
                    >
                    </div>
                    <div className="div-temp">
                        <p>{Math.trunc(temp)}°</p>
                    </div>
                </div>
            </div>
        )
    }

}