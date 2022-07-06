import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link className="link" to="/">
        <h1>Product Review App</h1>
      </Link>

      <Link className="link" to="/about-me">
        <h1>About me</h1>
      </Link>
    </header>
  );
}

export default Navbar;
