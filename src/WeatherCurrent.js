import React from "react";
import "./WeatherCurrent.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCurrent() {
  return (
    <div className="WeatherCurrent">
      <h1>Bridgetown</h1>
      <ul>
        <li>Monday 22:00</li>
        <li>Partly cloudy</li>
      </ul>

      <div className="row m-5">
        <div className="currentWeather">
          <div className="col-md-6 currentTemp d-flex">
            <WeatherIcon code={"01d"} size={90} />
            <h2 className="m-3">29&deg;</h2>
          </div>
          <div className="m-4 col-md-6 currentDescription">
            <ul>
              <li>Feels like 32&deg;</li>
              <li>Wind: 4 m/s</li>
              <li>Humidity: 70%</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="WeatherForecast">
          <div className="col text-center w-25">
            <h3>Mon</h3>
            <WeatherIcon code={"01d"} size={40} />
            <div className="d-flex justify-content-center">
              <h4 className="text-center">28&deg; 24&deg;</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
