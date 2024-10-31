import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { useAuth } from "../services/AuthProvider";
import Navbar from "react-bootstrap/Navbar"
export default function NavBar() {
  const { user, logout } = useAuth();
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-light bg-light p-3"
      style={{ gap: "15px" }}
    >
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
     
      <nav className="ms-auto">
      {user ? (
        <>
         <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? "active-link" : "") + " me-3"}
      >
        Favorites 
      </NavLink>
          <span>Welcome, <strong>{user}</strong>! </span>
          <button className="ms-2" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <NavLink className="hover:text-[#FF2A70]" to="/login">
          Log in
        </NavLink>
      )}
</nav>
    </Navbar>
  );
}
