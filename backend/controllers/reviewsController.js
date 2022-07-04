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

module.exports = {
  getReviews,
};
