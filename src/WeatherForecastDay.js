import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function getNextDay() {
    let date = new Date(props.data.dt * 1000);
    date.setDate(date.getDate() + 1);
    let nextDay = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[nextDay];
  }

  return (
    <div className="WeatherForecastDay col-md-12">
      <div className="WeatherForecast-day">{getNextDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemp()}</span>
        <span className="WeatherForacast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
