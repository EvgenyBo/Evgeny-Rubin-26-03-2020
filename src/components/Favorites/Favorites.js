import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from '../../App';
import { getTodayWeather } from '../../api/Api';
import DayCard from '../WeekForecast/DayCard';
import DegreeToggle from '../WeekForecast/DegreeToggle';
import './favorites.scss';
function Favorites() {
    const { favorites, updateFavorites, degreeType, setDegreeType } = useContext(FavoritesContext);
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const allCitiesWeather = [];
        Promise.all(
            favorites.map(async (fav, index) => {
                const todayWeather = await getTodayWeather(fav.key);
                todayWeather.cityName = fav.name;
                allCitiesWeather[index] = todayWeather;
            })
        ).then(() => {
            setWeatherData(allCitiesWeather);
        });
    }, []);

    const updateForecastDegree = event => {
        setDegreeType(event.target.value)
    }

    const formatDayCards = () => {
        return weatherData.map((data, index) => <DayCard type={'city'} data={data} degreeType={degreeType} key={index} />)
    }

    return (
        <div className='favorites'>
            {favorites.length > 0 ?
                (<>
                    <div key={2} className='todayTitle'>Today's Forecast.</div>
                    {weatherData.length > 0 && <DegreeToggle key={1} degreeType={degreeType} updateForecastDegree={updateForecastDegree} />}
                    <div className='dailyForecast'>
                        <div className='dailyCards'>
                            {formatDayCards()}
                        </div>
                    </div>
                </>) : <div key={2} className='addCity'>Add city to favorites in the Home screen.</div>}
        </div>
    );
}

export default Favorites;