import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Sydney</h1>
        <ul>
            <li>Tuesday 20:20</li>
            <li>Light rain showers</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">  
              <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="Light rain showers" className="float-left" />
              <div className="float-left">
            <span className="temperature">14 </span>
            <span className="unit">℃</span>
            </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 71%</li>
                    <li>Humidity: 93%</li>
                    <li>Wind: 6 km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );
}
