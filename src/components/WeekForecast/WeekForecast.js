import React, { useEffect, useState } from "react";
import { getFiveDayWeather } from '../../api/Api';
import DayCard from './DayCard';
import './weekForecast.scss'

function WeekForecast({ cityNumber, degreeType }) {

    const [weekData, setWeekData] = useState([]);

    useEffect(() => {
        if (cityNumber) {
            getFiveDayWeather(cityNumber).then((weeklyData) => {
                setWeekData(weeklyData)
            })
        }
    }, [cityNumber]);

    const formatDayCards = () => {
        return weekData.map((data, index) => <DayCard data={data} degreeType={degreeType} key={index} />)
    }

    return (
        <div className='dailyForecast'>
            <div className='dailyCards'>
            {formatDayCards()}
            </div>
        </div>
    );
}

export default WeekForecast;