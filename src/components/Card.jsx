

function Card(props) {
  return (
    <div className='card'>
        <h2>{props.title}.</h2>
        <p>Sky: {props.sky}.</p>
        <p>Wind Speed: {props.windSpeed}m/s.</p>
        <h3>Temperature</h3>
        <p>Feels like {props.feelsLike}°C.</p>
        <p>Highs: {props.high}°C.</p>
        <p>Lows: {props.low}°C.</p>
    </div>
  )
}

export default Card