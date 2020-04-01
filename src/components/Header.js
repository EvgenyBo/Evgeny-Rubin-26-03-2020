import React from "react";
import { NavLink } from "react-router-dom";
import useDarkMode from '../logic/useDarkMode';
import Toggle from './Toggle/Toggle';

function Header() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="navbar">
      <span className="herolo">Herolo Weather Task</span>
      <NavLink activeClassName="active" to="/home">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/favorites">
        Favorites
      </NavLink>
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
  );
}
export default Header;