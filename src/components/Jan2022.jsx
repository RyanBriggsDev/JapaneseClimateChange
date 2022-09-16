
import { useState, useEffect } from "react"
import Card from "./Card"

const data = require('../data/Jan/012022.json')

function Jan2022() {

  return (
    <Card
      title='Here is data from January 2022'
      sky={data.weather[0].main}
      windSpeed={data.wind.speed}
      feelsLike={Math.round(data.main.feels_like * 10) / 10}
      high={Math.round(data.main.temp_max * 10) / 10}
      low={Math.round(data.main.temp_min * 10) / 10}
    >
    </Card>
  )
}

export default Jan2022