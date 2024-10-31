import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { useAuth } from "../services/AuthProvider";

export default function NavBar() {
  const { user, logout } = useAuth();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light "
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
          <span>Welcome, <strong>{user}</strong>! </span>
          <button className="uppercase" onClick={logout}>
            Log out
          </button>
        </>
      ) : (
        <NavLink className="hover:text-[#FF2A70]" to="/login">
          Log in
        </NavLink>
      )}
</nav>
    </nav>
  );
}
