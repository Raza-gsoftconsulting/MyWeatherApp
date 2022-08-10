import React, { useState } from "react";

function Maincontent() {

  const apiKey = '5aca61c1dc1699294e3e81bdb5dd7889'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event, decline) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then(response => response.json())
        .then(data => setWeatherData(data), setCity("")
        ).catch (decline = (error) => {
          console.log("You entered wrong API");
      });
    }
  };
  return (
    <div className="weather-box">
      <input
        className="input"
        placeholder="Enter Your City..."
        onChange={n => setCity(n.target.value)}
        value={city}
        onKeyPress={getWeather}>
      </input>
      {typeof weatherData.main === "undefined" ? (
        <div className="Headline">
          <p>Welcome to Weather ForeCast. Please Enter your City</p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}
export default Maincontent;