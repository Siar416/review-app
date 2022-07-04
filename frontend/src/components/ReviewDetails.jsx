import { useReviewContext } from "../hooks/useReviewContext";

const ReviewDetails = ({ review }) => {
  return (
    <div className="review-details">
      <h3>{review.product}</h3>
      <h3>{review.rating}</h3>
      <h3>{review.review}</h3>
    </div>
  );
};

export default ReviewDetails;
