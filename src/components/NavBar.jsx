import {Link} from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <h1 className="text-3xl font-bold underline">Capstone project </h1>
      <Link to="/">Home</Link>
      <Link to="/vote">Vote</Link>
      <Link to="/login">Login</Link>

    </nav>
  );
}
