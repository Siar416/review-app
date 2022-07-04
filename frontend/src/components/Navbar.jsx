import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/">
        <h1>Product Review App</h1>
      </Link>
    </header>
  );
}

export default Navbar;
