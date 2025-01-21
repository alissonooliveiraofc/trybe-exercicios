import { NavLink } from "react-router-dom";
import './navBar.css';

function NavBar() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/coffe'>Cafés</NavLink>
      <NavLink to='/coffe-list'>Lista de Cafés</NavLink>
    </nav>
  )
}

export default NavBar;