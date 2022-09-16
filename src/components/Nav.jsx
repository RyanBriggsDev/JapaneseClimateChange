import { useState, useEffect } from 'react';

import logoImage from '../assets/images/icon-japan.png'
import { Link } from 'react-router-dom'

function Nav() {

  const API_KEY = process.env.REACT_APP_API_KEY

  const [currentWeather, setCurrentWeather] = useState({})
  const [callComplete, setCallComplete] = useState(false)

  const { main, name, weather, wind} = currentWeather

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

  if(!callComplete) return <nav><p>Loading...</p></nav>

  if (currentWeather) {  
    return (
      <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to='/'><img src={logoImage} alt="blue umbrella - click to go home" width='48px' height='48px'/></Link>
        </div>
        <div className="nav-mid">
          <p>Currently it's {Math.round(currentWeather.main.temp * 10) / 10}°C</p>
        </div>
        <div className="nav-right">
          <ul>
            <Link to='/about'><li>About</li></Link>
            <Link to='/june'><li>June</li></Link>
            <Link to='/january'><li>January</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
}

export default Nav