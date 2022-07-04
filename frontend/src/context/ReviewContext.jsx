import { createContext, useReducer } from "react";

export const ReviewContext = createContext();

export const reviewReducer = (state, action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      return {
        reviews: action.payload,
      };
    case "CREATE_REVIEW":
      return {
        reviews: [action.payload, ...state.reviews],
      };
    default:
      return state;
  }
};

export const ReviewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reviewReducer, {
    reviews: null,
  });

  return (
    <ReviewContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ReviewContext.Provider>
  );
};
