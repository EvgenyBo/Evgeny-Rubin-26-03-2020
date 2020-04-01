const API_KEY = '9N0tBeIruWDU4Z1V47DhCikBriMdz1iE';
const API_HOST = 'http://dataservice.accuweather.com/';
const API_VERSION = 'v1';


const CitiesAutocompleteApiUrl = (str) => `${API_HOST}locations/${API_VERSION}/cities/autocomplete?apikey=${API_KEY}&q=${str}`;

const LocationApiUrl = (lat, long) => `${API_HOST}locations/${API_VERSION}/cities/geoposition/search?apikey=${API_KEY}&q=${lat},${long}`;

const OneDayWeatherApiUrl = key => `${API_HOST}forecasts/${API_VERSION}/daily/1day/${key}?apikey=${API_KEY}`;

const FiveDayWeatherApiUrl = key => `${API_HOST}forecasts/${API_VERSION}/daily/5day/${key}?apikey=${API_KEY}`;

export function getCities(str) {
    return fetch(CitiesAutocompleteApiUrl(str)).then(response => response.json()).then(res => {
        return res.map(city => ({
            name: city.LocalizedName,
            key: city.Key,
        }));
    });
}

export function getCurrentCity(lat, long) {
    return fetch(LocationApiUrl(lat, long)).then(response => response.json()).then(res => ({
        name: res.LocalizedName,
        key: res.Key,
    }))
}

export function getTodayWeather(key) {
    return fetch(OneDayWeatherApiUrl(key)).then(response => response.json()).then(res => {
        return res.DailyForecasts[0];
    })
}

export function getFiveDayWeather(key) {
    return fetch(FiveDayWeatherApiUrl(key)).then(response => response.json()).then(res => {
        return res.DailyForecasts;
    })
}