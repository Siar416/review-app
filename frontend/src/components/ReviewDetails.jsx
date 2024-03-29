import { useEffect } from "react";
import { useReviewContext } from "../hooks/useReviewContext";
import { GoStar } from "react-icons/go";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ReviewDetails = () => {
  const { reviews, dispatch } = useReviewContext();

  console.log(process.env.REACT_APP_BACKEND_URL);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL);

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
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`, {
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
              <GoStar className="star" />
            </h4>
            <h2 className="review-item review">{review.review}</h2>
            {review.url && (
              <a target="_blank" href={review.url}>
                {review.url}
              </a>
            )}
            <BsFillTrashFill
              className="trash"
              onClick={() => handleDelete(review._id)}
            />
            <p className="date">
              {formatDistanceToNow(new Date(review.updatedAt), {
                addSuffix: true,
              })}
            </p>

            <Link className="edit" to={`/edit-review/${review._id}`}>
              <AiFillEdit />
            </Link>
          </div>
        ))}
    </>
  );
};

export default ReviewDetails;
