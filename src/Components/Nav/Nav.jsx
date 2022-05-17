import "./Nav.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        <p>About Me</p>
        <span></span>
      </NavLink>
      <NavLink to="/projects">
        <p>Projects</p>
        <span></span>
      </NavLink>
      <NavLink to="/contact">
        <p>Contact</p>
        <span></span>
      </NavLink>
    </nav>
  );
};

export default Nav;
