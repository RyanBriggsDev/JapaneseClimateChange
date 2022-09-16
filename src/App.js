// functional imports
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// page imports
import Home from './pages/Home';
import January from './pages/January';
import June from './pages/June'
import About from './pages/About';

// component imports
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
        <Router>
          <div className="page-layout">
            <Nav />
            <main>
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/june' element={<June />} />
                <Route path='/january' element={<January />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
  );
}

export default App;