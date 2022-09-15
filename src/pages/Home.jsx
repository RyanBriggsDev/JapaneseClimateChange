import Header from "../components/Header"
import Now from '../components/Now'
import Nineteen71 from '../components/Nineteen71'

function Home() {
  return (
        <div className="container">
          <Header
            title='Japan'
            pageDesc={`This app was made to show how climate change has effected Japan's weather over the last 40 years.`}
          />
          <Now />
          <Nineteen71 />
        </div>
  )
}

export default Home