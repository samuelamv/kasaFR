import '../styles/Navbar.scss'
import { NavLink } from 'react-router-dom'
import logo from '../assets/KasaLogo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar_logo"></img>
      <div className="navbar_links">
        <NavLink to="/" className="navbar__link">Accueil</NavLink>
        <NavLink to="/about" className="navbar_link">À propos</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
