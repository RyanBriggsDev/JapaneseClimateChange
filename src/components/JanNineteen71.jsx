
import { useState, useEffect } from "react"
const data = require('../data/01011971.json')
console.log(data);

function JanNineteen71() {

  return (
    <div>
      <h2>Now let's look at the same data from <span>January</span> 1971.</h2>
      <p>Sky: {data[0].weather.main}.</p>
      <p>Wind speed: {data[0].wind.speed}m/s.</p>
      <div className="temp">
        <h3>Temperature</h3>
        <p>Feels like: {Math.round(data[0].main.feels_like * 10) / 10}°C</p>
        <p>Highs: {Math.round(data[0].main.temp_max * 10) / 10}°C</p>
        <p>Lows: {Math.round(data[0].main.temp_min * 10) / 10}°C</p>
      </div>
    </div>
  )
}

export default JanNineteen71