import Header from "../components/Header"
import JuneNineteen71 from '../components/JuneNineteen71'

function June() {
  return (
    <div className='container'>      
      <Header 
        title='Summer - June'
        pageDesc='Here is the historical data for Japanese Summer (June) periodically since 1971.'
      />
      <JuneNineteen71 />
  </div>
  )
}

export default June