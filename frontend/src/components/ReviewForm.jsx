import { useState } from "react";
import { useReviewContext } from "../hooks/useReviewContext";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const { reviews, dispatch } = useReviewContext();
  const navigate = useNavigate();

  const [product, setProduct] = useState("");
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = async () => {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product, rating, review, url }),
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
        setUrl("");
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
            className={
              emptyFields.includes("product")
                ? "inputs error-outline"
                : "inputs"
            }
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            type="text"
            placeholder="Enter Item Name"
          />
          <input
            className={
              emptyFields.includes("rating") ? "inputs error-outline" : "inputs"
            }
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="number"
            placeholder="Enter Rating"
            min="0"
            max="5"
          />
          <textarea
            className={
              emptyFields.includes("review") ? "inputs error-outline" : "inputs"
            }
            value={review}
            onChange={(e) => setReview(e.target.value)}
            type="text"
            placeholder="Enter Review"
          />
          <input
            className={
              emptyFields.includes("url") ? "inputs error-outline" : "inputs"
            }
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="url"
            placeholder="https://example.com"
            pattern="https://."
          />
        </div>
        <button onClick={handleSubmit} className="inputs submit">
          Submit Review
        </button>
        <div className="error">{error && <h3>{error}</h3>}</div>
      </div>
    </form>
  );
};

export default ReviewForm;
