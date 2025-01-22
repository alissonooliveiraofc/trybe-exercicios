import { NavLink } from "react-router-dom";
import './navBar.css';

function NavBar() {
  return (
    <header className="nav-bar">
      <nav className="nav">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/cafes'>Cafés</NavLink>
      </nav>
    </header>
  )
}

export default NavBar;