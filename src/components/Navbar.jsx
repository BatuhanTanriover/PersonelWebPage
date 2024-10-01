import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import CodeIcon from '@mui/icons-material/Code';

export default function navbar() {
  return (
    <div className="navbar__main">
      <div className="code">
      <CodeIcon className="Icon" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem}'}} }/>
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
