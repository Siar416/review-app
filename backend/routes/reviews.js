const express = require("express");
const router = express.Router();

const { getReviews } = require("../controllers/reviewsController");

// get all reviews
router.get("/", getReviews);

// get single review
// router.get("/:id", getReview);

module.exports = router;
