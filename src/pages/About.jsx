import Header from "../components/Header"

function About() {
  return (
    <div className='container'>
        <Header 
            title='About'
            pageDesc='What is this? Why have I made it?'
        />
        <p>Japan is one of the worst countries effected by Climate Change. <br />I wanted to make a showcase of how the weather there has changed over time.</p>
        <hr />
        <p>This app is made in React JS and uses data from <button onClick={() => window.location.replace('https://openweathermap.org/')} className="no-style-btn">openweathermap.org</button>.</p>
    </div>
  )
}

export default About