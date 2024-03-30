import { Link, NavLink } from "react-router-dom"
import logoInsta from "../../assets/instagram.png"
import logoFacebook from "../../assets/facebook.png"

import "./footer.css"
function Footer(){
return(
<footer>
    <nav>
    <Link className="main-nav-logo" to="https://www.instagram.com/">
        <img
          className="main-nav-logo-image"
          src={logoInsta}
          alt="insta Logo"
        />
    </Link>
    <Link className="main-nav-logo" to="https://www.facebook.com">
        <img
          className="main-nav-logo-image"
          src={logoFacebook}
          alt="facebook Logo"
        />
    </Link>
    <NavLink to="/a-propos">
        A propos
    </NavLink>
    <NavLink to="/contact">
       Contact
    </NavLink>
    <Link to="https://www.google.com/maps?q=123+Rue+de+la+Galette,+Paris,+75001,+France
" >123 Rue de la Galette 75001 Paris, France</Link>
    </nav>
</footer>
)
}
export default Footer