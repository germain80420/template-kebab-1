import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./header.css"
function Header(){
return(
<header>
    <nav>
    <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Kebab Logo"
        />
    </NavLink>
    <NavLink to="/menus">
        Menus
    </NavLink>
    <NavLink to="/a-la-carte">
        A la carte
    </NavLink>
    <NavLink to="/boissons-et-desserts">
        Boissons et desserts
    </NavLink>
    </nav>
</header>
)
}
export default Header