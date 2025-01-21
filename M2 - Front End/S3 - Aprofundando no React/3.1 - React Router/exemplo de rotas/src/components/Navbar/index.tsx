import { NavLink } from "react-router-dom";
import './navBar.css';

function NavBar() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/cafes'>Cafés</NavLink>
    </nav>
  )
}

export default NavBar;