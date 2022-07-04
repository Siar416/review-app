const express = require("express");

const {
  getReviews,
  getReview,
  createReview,
  deleteReview,
} = require("../controllers/reviewsController");

const router = express.Router();

// get all reviews
router.get("/", getReviews);

// get single review
router.get("/:id", getReview);

// POST new review
router.post("/", createReview);

// DELETE review
router.delete("/:id", deleteReview);

module.exports = router;
