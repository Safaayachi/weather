import React from "react";
import DailyForecastCard from "./DailyForecastCard";



const DailyForecast=({props}) => (

    Array.from({length:5})
    .map((_, index) => (
        <DailyForecastCard key={index} />
    )
)

);

export default DailyForecast ;