import { useEffect } from "react";
import ReviewDetails from "../components/ReviewDetails";
import { useReviewContext } from "../hooks/useReviewContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { reviews, dispatch } = useReviewContext();

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const response = await fetch("/api/reviews");
  //     const json = await response.json();

  //     if (response.ok) {
  //       dispatch({
  //         type: "GET_REVIEWS",
  //         payload: json,
  //       });
  //     }
  //   };
  //   fetchReviews();
  // }, [dispatch]);

  // return (
  //   <div className="reviews-container">
  //     {reviews &&
  //       reviews.map((review) => (
  //         <ReviewDetails key={review._id} review={review} />
  //       ))}
  //   </div>
  // );

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
