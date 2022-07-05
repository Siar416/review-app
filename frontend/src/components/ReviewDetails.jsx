import { useEffect } from "react";
import { useReviewContext } from "../hooks/useReviewContext";
import { GoStar } from "react-icons/go";
import { BsFillTrashFill } from "react-icons/bs";

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

  const handleDelete = async (id) => {
    const response = await fetch(`/api/reviews/${id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({
        type: "DELETE_REVIEW",
        payload: json,
      });
    }
  };

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
            <BsFillTrashFill onClick={() => handleDelete(review._id)} />
          </div>
        ))}
    </>
  );
};

export default ReviewDetails;
