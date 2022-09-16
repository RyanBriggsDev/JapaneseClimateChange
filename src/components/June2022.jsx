
import { useState, useEffect } from "react"
import Card from "./Card"

const data = require('../data/June/04062022.json')

function June2022() {

  return (
    <Card
      title='Here is data from June 2022'
      sky={data.weather.main}
      windSpeed={data.wind.speed}
      feelsLike={Math.round(data.main.feels_like * 10) / 10}
      high={Math.round(data.main.temp_max * 10) / 10}
      low={Math.round(data.main.temp_min * 10) / 10}
    >
    </Card>
  )
}

export default June2022