import logoImage from '../assets/images/icon-japan.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to='/'><img src={logoImage} alt="blue umbrella" width='48px' height='48px'/></Link>
        </div>
        <div className="nav-right">
          <ul>
            <Link to='/about'><li>About</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav