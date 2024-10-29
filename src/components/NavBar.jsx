import {Link} from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link to="/">Home</Link>
      <Link to="/top">Top</Link>
      <Link to="/vote">Vote</Link>
      <Link to="/login">Login</Link>


    </nav>
  );
}
