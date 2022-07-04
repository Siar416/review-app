const Review = require("../models/reviewModel");
const mongoose = require("mongoose");

// GET all reviews
const getAllReviews = async (req, res) => {
  res.status(200).json({ msg: "all reviews" });
};

module.exports = {
  getAllReviews,
};
