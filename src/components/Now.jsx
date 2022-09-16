import { useState, useEffect } from "react"

function Now() {

    const API_KEY = process.env.REACT_APP_API_KEY

    const [currentWeather, setCurrentWeather] = useState({})
    const [callComplete, setCallComplete] = useState(false)
    const [date, setDate] = useState(null)
    const [month, setMonth] = useState(null)

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=japan&units=metric&APPID=${API_KEY}`)
            const data = await response.json()
            if(data) {
                setCurrentWeather(data)
                setCallComplete(true)
            }    
        } catch (error) {
            console.log(error)
        }
        }
    
    useEffect(() => {
        fetchData()
    }, [callComplete])

    useEffect(() => {
        setDate(new Date())
        if(date) {
            setMonth(months[date.getMonth()])
        }
    }, date, month)


    const { main, name, weather, wind} = currentWeather

    if(!callComplete) {
        return <h1>Loading...</h1>
    }

    if(callComplete) {
        return (
            <div className="now">
                <h2>Let's take a look at {name}'s weather right now. {`${date.getDate()} ${month}, ${date.getFullYear()}`}</h2>
                <p>Sky: {weather[0].main}.</p>
                <p>Wind speed: {wind.speed}m/s.</p>
                <div className="temp">
                    <h3>Temperature</h3>
                    <p>Feels like: {Math.round(main.feels_like * 10) / 10}°C</p>
                    <p>Highs: {Math.round(main.temp_max * 10) / 10}°C</p>
                    <p>Lows: {Math.round(main.temp_min * 10) / 10}°C</p>
                </div>
            </div>
          )
    }
}

export default Now