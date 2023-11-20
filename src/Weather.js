import React, {useState } from "react";
import axios from "axios";
import "./Weather.css";
// import WeatherIcon from "./WeatherIcon";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather()
{
    const [city,setCity] = useState("");
    const [msg, setMsg] = useState("");
    const [weather, setWeather] = useState({}); 
    let day;

    function displayForecast(response)
    {
        let forecast = response.data.daily;

        forecast.forEach(function (forecastDay) {
            
            let src=`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${forecastDay.condition.icon}.png`;
                   
        });
    }

    function getForecast(coords) {
        // console.log(coords);
        let Apikey = "03ob4taaa6f366304d608c02ae4ad453";
        let ApiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coords.lon}&lat=${coords.lat}&key=${Apikey}&units=metric`;
        // console.log(ApiUrl);
        axios.get(ApiUrl).then(displayForecast);
    }

  function display(response)
  {
    console.log(response.data);
    setWeather({
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        desc: response.data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    getForecast(response.data.coord);
  }
  function currentDisplay(response)
  {
    console.log(response.data);
    setWeather({
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  function onCurrentEvent(event)
  {
    event.preventDefault();
    setCity("London");
    let apikey = "08f21c358ceb7bbd0f79880f5ba5bbf3";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(currentDisplay);
  }
   function handelSearch(event)
  {
    event.preventDefault();
    setCity(event.target.value);
  }
  function onSearchEvent(event)
  {
    event.preventDefault();
    setMsg(city);
    let apikey = "08f21c358ceb7bbd0f79880f5ba5bbf3";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(display);
  }
    return(
    <div>
        <div className="Weather">
             <div className="col-12">
            <form className="d-flex" role="search">
            <input
              id="searchInput"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handelSearch}
            />
            <button className="btn btn-primary" type="submit" onClick={onSearchEvent}>
              Search
            </button>
             <button className="btn btn-success ml-2" type="submit"  onClick={onCurrentEvent}>
              Current
            </button>
          </form>
          </div>
          <div className="ml-3">
            <h2 id="LoadedCityName">{msg}</h2>
            <h5>Last updated at: <span id="date">@{day} 16:00</span></h5>
            <h5 id="desc">{weather.desc}</h5>
            <div className="temp">
                <div className="cloud"><img id="icon" alt="" src={weather.icon} />
                {/* "https://openweathermap.org/img/wn/10d@2x.png" */}
                </div>
                <h1 id="tmp">{weather.temperature}</h1>
                <div id="c" className="celciusPosition">°C<span>|</span></div>
                <div id="f" className="celciusPosition">°F</div>
            </div>
            </div>
            <div className="wind">
                <div>
                    <h6 >Humidity:</h6>
                    <h6 id="Humi">{weather.humidity}</h6>
                    <h6 >%</h6>
                </div>
                <div>
                <h6 id="Wind">Wind: <span id="wind">{weather.wind}</span> km/h</h6>
                </div>
            </div>
            <div className="weather-forecast" id="forecast">
                <div className="row ml-3">
                    
                    <div className="forecast col">
                        <p>Mon</p>
                        <img  class="forecast_img" id="icon" alt="" src={weather.icon} />
                    </div>
                    <div className="forecast col">
                        <p>Mon</p>
                        <img  class="forecast_img" id="icon" alt="" src={weather.icon} />
                    </div>
                    <div className="forecast col">
                        <p>Mon</p>
                        <img  class="forecast_img" id="icon" alt="" src={weather.icon} />
                    </div>
                    <div className="forecast col">
                        <p>Mon</p>
                        <img  class="forecast_img" id="icon" alt="" src={weather.icon} />
                    </div>
                    <div className="forecast col">
                        <p>Mon</p>
                        <img  class="forecast_img" id="icon" alt="" src={weather.icon} />
                    </div>
                    <div className="forecast col">
                        <p>Mon</p>
                        <img  class="forecast_img" id="icon" alt="" src={weather.icon} />
                    </div>
                    <div className="forecast col">
                        <p>Mon</p>
                        <img  class="forecast_img" id="icon" alt="" src={weather.icon} />
                    </div>
                
                </div>
            </div>
        </div>
        <p className="myfooter"><a href="https://github.com/vijetarajput/React_Weather_App">Open-source code </a>by Vijeta Singh Rajput</p>
    </div>
    );
} 