
import React from 'react';

const DegreeToggle = ({degreeType, updateForecastDegree}) => {
  return (
    <div className='degreeToggle'>
    <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="celsius"
        value="celsius"
        checked={degreeType === "celsius"}
        onChange={updateForecastDegree}
        />
        <label className="form-check-label" htmlFor="celsius">&#8451;</label>
      </div>
      <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="farenheit"
        value="fahrenheit"
        checked={degreeType === "fahrenheit"}
        onChange={updateForecastDegree}
        />
        <label className="form-check-label" htmlFor="farenheit">&#8457;</label>
      </div>
    </div>
  )
}

export default DegreeToggle;