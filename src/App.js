// functional imports
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// page imports
import Home from './pages/Home';

// component imports
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <div className="page-layout">
          <div className="container">
            <Nav />
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
