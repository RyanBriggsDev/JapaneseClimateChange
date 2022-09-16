import Header from "../components/Header"
import June1971 from '../components/June1971'
import June2022 from "../components/June2022"
import June1995 from "../components/June1995"

function June() {
  return (
    <div className='container'>      
      <Header 
        title='Summer - June'
        pageDesc='Here is the historical data for Japanese Summer (June) periodically since 1971.'
      />
      <June1971 />
      <June1995 />
      <June2022 />
  </div>
  )
}

export default June