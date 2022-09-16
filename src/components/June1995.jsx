
import { useState, useEffect } from "react"
import Card from "./Card"

const data = require('../data/June/061995.json')

function June1995() {

  return (
    <Card
      title='Here is data from June 1995'
      sky={data.weather.main}
      windSpeed={data.wind.speed}
      feelsLike={Math.round(data.main.feels_like * 10) / 10}
      high={Math.round(data.main.temp_max * 10) / 10}
      low={Math.round(data.main.temp_min * 10) / 10}
    >
    </Card>
  )
}

export default June1995