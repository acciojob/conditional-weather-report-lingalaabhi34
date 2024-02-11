
import React,{useState,useEffect} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";
const App = () => {
 const [weather,setweather]=useState({
  temperature:0,
  conditions:""
 })
 useEffect(()=>{
  const mockweather = {temperature:25,conditions:"Sunny"};
  setweather(mockweather)
 },[]);
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay mock={weather}/>
       
    </div>
  )
}

export default App
