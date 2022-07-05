import { useEffect } from "react";
import { useReviewContext } from "../hooks/useReviewContext";
import { GoStar } from "react-icons/go";

const ReviewDetails = () => {
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
    <>
      {reviews &&
        reviews.map((review) => (
          <div className="reviews-container" key={review._id}>
            <h1 className="review-item title">{review.product}</h1>
            <h4 className="review-item rating">
              {review.rating}
              <GoStar />
            </h4>
            <h2 className="review-item review">{review.review}</h2>
          </div>
        ))}
    </>
  );
};

export default ReviewDetails;
