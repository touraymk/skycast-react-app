import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import videoFile from "./star-bg-skycast.mp4";
import WeatherCurrent from "./WeatherCurrent";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(weatherData.description);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      feelTemperature: response.data.main.feels_like,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "55a287616385559356e729db796a24f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <video className="videoBackground shadow-lg" autoPlay muted loop>
          <source src={videoFile} type="video/mp4"></source>
        </video>
        <form onSubmit={handleSubmit} className="m-md-4">
          <input
            type="search"
            placeholder="Enter city.."
            onChange={handleCityChange}
            className="col-7"
            autoFocus={true}
          />
          <button type="submit">🔍</button>
        </form>

        <div className="row">
          <WeatherCurrent data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
