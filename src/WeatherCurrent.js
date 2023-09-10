import React from "react";
import "./WeatherCurrent.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCurrent(props) {
  console.log(props.data.description);
  return (
    <div className="WeatherCurrent">
      <div className="currentCityCountry mt-3 d-flex">
        <h1>{props.data.city}</h1>
        <span className="country">{props.data.country}</span>
      </div>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>
          {((props.data && props.data.description) || "")
            .charAt(0)
            .toUpperCase() +
            ((props.data && props.data.description) || "").slice(1)}
        </li>
      </ul>

      <div className="row m-5">
        <div className="currentWeather">
          <div className="col-md-6 currentTemp d-flex">
            <WeatherIcon code={props.data.icon} size={90} />
            <h2 className="m-3">{Math.round(props.data.temperature)}&deg;</h2>
          </div>
          <div className="m-4 col-md-6 currentDescription">
            <ul>
              <li>Feels like {Math.round(props.data.feelTemperature)}&deg;</li>
              <li>Wind: {Math.round(props.data.wind)} m/s</li>
              <li>Humidity: {props.data.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
