import Header from '../components/Header'
import Jan1971 from '../components/Jan1971'
import Jan1995 from '../components/Jan1995'
import Jan2022 from '../components/Jan2022'

function January() {
  return (
    <div className='container'>
      <Header 
        title='Winter - January'
        pageDesc='Here is the historical data for Japanese Winter (January) periodically since 1971.'
      />
      <Jan1971 />
      <Jan1995 />
      <Jan2022 />
    </div>
  )
}

export default January