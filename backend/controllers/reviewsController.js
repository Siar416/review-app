const Review = require("../models/reviewModel");
const mongoose = require("mongoose");

// GET all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({}).sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET single review
const getReview = async (req, res) => {
  const { id } = req.params;

  // checking if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such product" });
  }

  try {
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({ error: "No such product" });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getReviews,
};
