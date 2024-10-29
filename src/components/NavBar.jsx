import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/top"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Top
      </NavLink>
      <NavLink
        to="/vote"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Vote
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Login
      </NavLink>
    </nav>
  );
}
