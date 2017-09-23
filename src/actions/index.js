const API_KEY = 'a9d824d8b6b93c037d8830bed2b2365e';

import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const WEATHER_URL =
    `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial&q=`;

export function fetchWeather(city, country_code = 'us') {
    const url = `${WEATHER_URL}${city},${country_code}`;
    const request = axios.get(url);


    return{
        type: FETCH_WEATHER,
        payload: request
    }
}