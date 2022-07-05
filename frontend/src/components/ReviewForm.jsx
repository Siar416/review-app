import { useState } from "react";
import { useReviewContext } from "../hooks/useReviewContext";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const { reviews, dispatch } = useReviewContext();
  const navigate = useNavigate();

  const [product, setProduct] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = async () => {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product, rating, review }),
      });
      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
      if (response.ok) {
        setProduct("");
        setRating(0);
        setReview("");
        setError(null);
        setEmptyFields([]);
        console.log("Review has been added", json);
        dispatch({
          type: "CREATE_REVIEW",
          payload: json,
        });
        navigate("/reviews-list");
      }
    };
    postData();
  };

  return (
    <form className="form-wrapper">
      <div className="form-container">
        <div className="form-title">
          <h1>Review Form</h1>
        </div>

        <div className="form-inputs">
          <input
            className="inputs"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            type="text"
            placeholder="Enter Item Name"
          />
          <input
            className="inputs"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="number"
            placeholder="Enter Rating"
            min="0"
            max="5"
          />
          <input
            className="inputs"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            type="text"
            placeholder="Enter Review"
          />
        </div>
        <button onClick={handleSubmit} className="inputs">
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
