import { useReviewContext } from "../hooks/useReviewContext";

const ReviewDetails = ({ review }) => {
  const { dispatch } = useReviewContext();

  return (
    <div className="review-details">
      <h3>{review.product}</h3>
    </div>
  );
};

export default ReviewDetails;
