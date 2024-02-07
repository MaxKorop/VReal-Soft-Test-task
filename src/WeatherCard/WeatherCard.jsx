import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Context } from '..';
import MainInfo from './MainInfo/MainInfo';
import WeatherForecast from './WeatherForecast/WeatherForecast';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import './weatherCard.css';

const WeatherCard = observer(({ city }) => {
    const [imgSrc, setImgSrc] = useState('');
    const [weather, setWeather] = useState([]);
    const [units, setUnits] = useState('metric');
    const { store } = useContext(Context);
    const [backgroundColor, setBackgroundColor] = useState('');
    const deleteRef = useRef();

    useEffect(() => {
        setWeather([]);
        const fetchData = async () => {
            try {
                let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&lang=${store.choosenLanguage}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
                setWeather(response.data.list)
            } catch (error) {
                store.setError({ message: `Cannot find city: ${city}!` });
                store.addToErrorCities(city);
            }
        }
        fetchData();
    }, [units, city]);
    
    useEffect(() => {
        if (weather[0] && Math.round(weather[0].main.temp) <= 0) setBackgroundColor('#F1F2FF');
        else setBackgroundColor('#FFFAF1');
        weather.length ? setImgSrc(`https://openweathermap.org/img/wn/${weather[0]?.weather[0]?.icon}@2x.png`) : console.log('Cannot set img src');
        if (store.choosenLanguage === 'he' && weather.length) {
            deleteRef.current.classList.remove('delete-city-card');
            deleteRef.current.classList.add('delete-city-card-rtl');
        }
    }, [weather]);

    const deleteCity = () => {
        store.removeFromCities(city);
    }

    if (store.errorCitiesIncludes(city)) return <></>;
    else if (weather.length) return (
        <div className='weather-card' style={{backgroundColor: backgroundColor}}>
            <span ref={deleteRef} className='delete-city-card' onClick={() => deleteCity()}>×</span>
            <MainInfo city={city} imgSrc={imgSrc} weather={weather} />
            <WeatherForecast weather={weather} />
            <WeatherDetails weather={weather} units={units} setUnits={setUnits} />
        </div>
    ); else return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20rem', height: '10rem', margin: 20 }}>
            <TailSpin
                visible={true}
                height="100"
                width="100"
                color="#C5C5C5"
                ariaLabel="tail-spin-loading"
                radius="1"
            />
        </div>
    );
});

export default WeatherCard;
