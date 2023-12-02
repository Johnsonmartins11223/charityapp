import StatsList from "../componets/StatsList";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from "react-router-dom"
import "../pages/Homepage.css";
import logo from '../assets/charity-word-cloud-heart-concept-56405290.webp'
function Homepage() {
  return (
    <div className="container">
    
      <div className="wrapper">
        <p>PLEASE I NEED YOUR VOTE</p>
        <img src={logo} alt="instagram-competition" />
        <h4 className="title">Fund Raising Vote</h4>
        <div className="button-container">
          <Link className="button-link" to='/instagramvoting'><button className="ig-button">VOTE WITH <InstagramIcon /></button></Link>
          <Link className="button-link" to="/"><button className="email-button">VOTE WITH <EmailIcon /></button></Link>   
        </div>
        <StatsList />
      </div>
    <footer>
    <h4>Powered by <span>google voting system</span>
    </h4>
  </footer>
  </div>
  )
}
export default Homepage
