import React from "react";
const WeatherDisplay=({mock})=>{
    const temperaturecolor= mock.temperature>20 ? "red" : "blue";
return(
    <div>
        <p style={{color:temperaturecolor}}>Temperature: {mock.temperature}   </p>
        <span>Conditions: {mock.conditions}</span>

    </div>
)
}
export default WeatherDisplay;