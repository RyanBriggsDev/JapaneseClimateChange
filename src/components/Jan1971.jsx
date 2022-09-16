
import { useState, useEffect } from "react"
import Card from "./Card";

const data = require('../data/Jan/01011971.json')

function Jan1971() {

  return (
    <Card
      title='Here is data from January 1971'
      sky={data[0].weather.main}
      windSpeed={data[0].wind.speed}
      feelsLike={Math.round(data[0].main.feels_like * 10) / 10}
      high={Math.round(data[0].main.temp_max * 10) / 10}
      low={Math.round(data[0].main.temp_min * 10) / 10}
    >
    </Card>
  )
}

export default Jan1971