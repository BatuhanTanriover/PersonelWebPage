import {Link} from "react-router-dom"
import "../styles/Navbar.css"

export default function navbar() {
  return (
    <div className="navbar__main">
      <div className="code">
      <img className="img2" src="deneme.png" alt="pixelart" />
      </div>
    <ul className="navbar__links">
     <Link to="/"><li>Home</li></Link> 
     <Link  to="/about"><li>About</li></Link> 
     <Link  to="/contact"><li>Contact</li></Link>
     <Link  to="/photos"><li>Photos</li></Link>

     </ul>
     </div>
  )
}
