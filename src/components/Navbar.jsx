import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">IK</NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/research" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Research</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
