import { useEffect } from "react";
import ReviewDetails from "../components/ReviewDetails";
import { useReviewContext } from "../hooks/useReviewContext";

const Home = () => {
  const { reviews, dispatch } = useReviewContext();

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("/api/reviews");
      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "GET_REVIEWS",
          payload: json,
        });
      }
    };
    fetchReviews();
  }, [dispatch]);

  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <ReviewDetails key={review._id} review={review} />
        ))}
    </div>
  );
};

export default Home;
