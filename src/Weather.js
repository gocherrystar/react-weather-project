import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ready: false});
    
    function handleResponse(response) {
    console.log(response.data);
        setWeatherData( {
        ready: true,
        temperature: response.data.main.temp,
        date: "Sunday 15:56",
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        city: response.data.name,

    });
    
   
}

if (weatherData.ready) {
return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-6">
            <input type="search" placeholder="Search city.." className="form-contril" autoFocus="on" />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"  />
            </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">  
            <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
              <div className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">℃</span>
            </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );
} else {
    const apiKey = "6b1ad2b1489fef19b8767763765b92f8";
   let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);

   return "loading...";
}
}
   
    