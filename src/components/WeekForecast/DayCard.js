import React from 'react';
var moment = require('moment');

const DayCard = ({ data, degreeType, type, cityName }) => {
  let newDate = new Date();
  const weekday = data.EpochDate * 1000
  newDate.setTime(weekday)

  const minFahrenheit = Math.round(data.Temperature.Minimum.Value);
  const minCelsius = Math.round((minFahrenheit - 32) * 5/9);

  const maxFahrenheit = Math.round(data.Temperature.Maximum.Value);
  const maxCelsius = Math.round((maxFahrenheit - 32) * 5/9);

  const dayIconNumber = data.Day.Icon < 10 ? `0${data.Day.Icon}` : data.Day.Icon;
  const dayIconURL = `https://developer.accuweather.com/sites/default/files/${dayIconNumber}-s.png`;

  const nightIconNumber = data.Night.Icon < 10 ? `0${data.Night.Icon}` : data.Night.Icon;
  const nightIconURL = `https://developer.accuweather.com/sites/default/files/${nightIconNumber}-s.png`;

  return (
      <div className="card">
        <h3 className="card-title">{type === 'city' ? data.cityName : moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        <img src={dayIconURL} alt="Logo" />
        <h2>Day {degreeType === "celsius" ? minCelsius + "°C" : minFahrenheit + "°F"}</h2>
        <img src={nightIconURL} alt="Logo" />
        <h2>Night {degreeType === "celsius" ? maxCelsius + "°C" : maxFahrenheit + "°F"}</h2>
        <div className="card-body">
          <p className="card-text">{data.Day.IconPhrase}</p>
        </div>
      </div>
  )
}

export default DayCard;