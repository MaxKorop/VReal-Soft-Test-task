import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const WeatherForecast = ({ weather }) => {
    const coldGradient = <defs>
            <linearGradient id="colorTC" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor="#5B8CFF" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#FFF4F4" stopOpacity={0.5} />
            </linearGradient>
    </defs>
    
    const warmGradient = <defs>
        <linearGradient id="colorTW" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#FFA25B" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#FFF4F4" stopOpacity={0.5} />
        </linearGradient>
    </defs>

    return (
        <div className="weather-forecast">
            <ResponsiveContainer width={290} height={80}>
                <AreaChart width={50} height={30} data={weather}>
                    {Math.round(weather[0].main.temp) <= 0 ? coldGradient : warmGradient}
                    <Area type='monotone' dataKey='main.temp' stroke='#ffffff00' baseValue='dataMin' fill={`url(${Math.round(weather[0].main.temp) <= 0 ? '#colorTC' : '#colorTW'})`} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default WeatherForecast;
