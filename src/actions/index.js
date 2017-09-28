const API_KEY = 'a9d824d8b6b93c037d8830bed2b2365e';

import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const FETCH_PARTNERS = 'FETCH_PARTNERS';

export const FETCH_SEASONS = 'FETCH_SEASONS';

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

export function fetchPartners() {
    const values = [];
    values.push({"value": "FOOTLCKRUS832O", "label": "FOOTLCKRUS832O"});
    values.push({"value": "SNIPESXXEUPRIO", "label": "SNIPESXXEUPRIO"});

    return {
        type: FETCH_PARTNERS,
        partners: values
    }
}

export function fetchSeasons() {
    const values = [];

    values.push({"value": "FA2016", "label": "FALL 2016"});
    values.push({"value": "HO2016", "label": "HOLIDAY 2016"});
    values.push({"value": "SP2017", "label": "SPRING 2017"});
    values.push({"value": "SU2017", "label": "SUMMER 2017"});


    return {
        type: FETCH_SEASONS,
        seasons: values
    }
}