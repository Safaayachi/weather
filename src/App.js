import React, { Fragment } from "react";
import './App.css';
import CurrentWeatherInfos from './components/CurrentWeatherInfos';
import CurrentWeatherDescription from './components/CurrentWeatherDescription';
import CurrentWeatherTemperature from './components/CurrentWeatherTemperature';
import CurrentWeatherIcon from './components/CurrentWeatherIcon';
import CurrentWeatherZone from './components/CurrentWeatherZone';
import DailyForecast  from './components/DailyForecast';

function App() {
  return (
  <Fragment>
    <div>
      <div className="main-section">
        <div className="main-section-container">
          <div class="location">
            <a href="#"  id="location">
              Use Your Location
            </a>
          </div>
          <CurrentWeatherIcon className="main-section-icon"/>
          <CurrentWeatherTemperature className="temperature" />
          <CurrentWeatherZone/>
          <CurrentWeatherDescription className="description"/>
          <CurrentWeatherInfos/>
             
        </div>
      </div>
    
    <footer>
    <div className="footer-container">
     <h2>5-Day Forecast</h2>
     <div class="days-forecast">
      <DailyForecast />
      </div>
      </div>
    </footer>
  </div>
  </Fragment>
  );
}

export default App;
