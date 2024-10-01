import "../styles/Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';


export default function Footer() {
 
  return (
    <div className="Footer__main">
      <div className="Icons">
        <div className="Icon"><Link to="https://www.linkedin.com/in/ahmet-batuhan-tanr%C4%B1%C3%B6ver-b65a58241/">
        <LinkedInIcon  sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}/>
        </Link></div>
        
        <div className="Icon"><Link to="https://github.com/BatuhanTanriover">
        <GitHubIcon  sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem}' }} }/>
        </Link></div>
      
      </div>
      <div className="Icons__right">
        <div>
        <CallIcon sx={{verticalAlign:"middle",marginRight:"0.5rem"}}/>
        <span className="spans">(+90) 539 683 60 18</span>
        </div>
        <div>
        <MailIcon sx={{verticalAlign:"middle",marginRight:"0.5rem"}}/>
        <span className="spans">batuhantanrover1@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

