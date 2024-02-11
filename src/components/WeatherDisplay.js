import React from "react";
const WeatherDisplay=({mock})=>{
    const temperaturecolor= mock.temperature>20 ? "red" : "blue";
return(
    <div>
        <span style={{color:temperaturecolor}}>Temperature: {mock.temperature}</span>
        <p>Conditions: {mock.conditions}</p>

    </div>
)
}
export default WeatherDisplay;