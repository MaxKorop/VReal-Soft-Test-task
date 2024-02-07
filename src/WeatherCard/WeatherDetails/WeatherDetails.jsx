import React from 'react';
import { useTranslation } from 'react-i18next';

const WeatherDetails = ({ weather, units, setUnits }) => {
    const unitsStyles = (unit) => unit !== units ? { fontSize: 22, marginLeft: 2, marginRight: 2, color: '#8D8D8D' } : { fontSize: 22, marginLeft: 2, marginRight: 2 };
    const {i18n, t} = useTranslation();

    return (
        <div className="weather-details">
            <div className="temp">
                <div className="temp-now">
                    <span style={{ fontSize: 44 }}>{Math.round(weather[0].main.temp)}</span>
                    <div className="units">
                        <span style={unitsStyles('metric')} onClick={() => setUnits('metric')}>°C</span>
                        <span style={{ fontSize: 20 }}>|</span>
                        <span style={unitsStyles('imperial')} onClick={() => setUnits('imperial')}>°F</span>
                    </div>
                </div>
                <div className="feels-like">
                    <span>{t('feels')}</span>
                    <span className='feels-like-temp'>
                        {Math.round(weather[0].main.feels_like)} {units === 'metric' ? '°C' : '°F'}
                    </span>
                </div>
            </div>
            <div className="wind-humidity-pressure">
                <div className="wind-humidity-pressure-details">
                    <span>{t('wind')}</span>
                    {Math.round(weather[0].main.temp) <= 0 ? (
                        <span className='cold'>{weather[0].wind.speed}{units === 'metric' ? 'm/s' : 'mph'}</span>
                    ) : (
                        <span className='warm'>{weather[0].wind.speed}{units === 'metric' ? 'm/s' : 'mph'}</span>
                    )}
                </div>
                <div className="wind-humidity-pressure-details">
                    <span>{t('humidity')}</span>
                    {Math.round(weather[0].main.temp) <= 0 ? (
                        <span className='cold'>{weather[0].main.humidity}%</span>
                    ) : (
                        <span className='warm'>{weather[0].main.humidity}%</span>
                    )}
                </div>
                <div className="wind-humidity-pressure-details">
                    <span>{t('pressure')}</span>
                    {Math.round(weather[0].main.temp) <= 0 ? (
                        <span className='cold'>{weather[0].main.pressure}Pa</span>
                    ) : (
                        <span className='warm'>{weather[0].main.pressure}Pa</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WeatherDetails;
