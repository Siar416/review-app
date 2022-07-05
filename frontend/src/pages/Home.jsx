import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-page">
      <Link className="link-botton" to="/reviews-list">
        List Reviews
      </Link>
      <Link className="link-botton" to="/create-review">
        Create Reviews
      </Link>
    </div>
  );
};

export default Home;
