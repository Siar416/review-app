const express = require("express");

const {
  getReviews,
  getReview,
  createReview,
} = require("../controllers/reviewsController");

const router = express.Router();

// get all reviews
router.get("/", getReviews);

// get single review
router.get("/:id", getReview);

// POST new review
router.post("/", createReview);

module.exports = router;
