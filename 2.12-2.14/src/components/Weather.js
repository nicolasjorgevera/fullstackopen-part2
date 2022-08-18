import React, {useState , useEffect} from "react"
import axios from "axios"


const Weather = ({capital}) =>{
    const [weather, setWeather] = useState("")
    const api_key = process.env.REACT_APP_API_KEY
    const hook = () =>{
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
            .then(response => {
            setWeather(response.data)
            
            })
    }
    useEffect(hook, [])
    
    if (capital === "") return
    if (weather === "") return
    return(
        <div>
            <h3>Weather in {capital}</h3>
            <br></br>
            <p><b>Temperature:</b> {weather.current.temperature} Celcius</p>
            <img src={weather.current.weather_icons[0]} alt="weather"></img>
            <p><b>Wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>

        </div>
    )
}

export default Weather