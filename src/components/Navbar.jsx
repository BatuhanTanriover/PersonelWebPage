import {Link} from "react-router-dom"
import "../styles/Navbar.css"

export default function navbar() {
  return (
    <div className="navbar__main">
      <div>MyLogo</div>
    <ul className="navbar__links">
     <Link to="/"><li>Home</li></Link> 
     <Link  to="/about"><li>About</li></Link> 
     <Link  to="/contact"><li>Contact</li></Link>
     <Link  to="/photos"><li>Photos</li></Link>

     </ul>
     </div>
  )
}
