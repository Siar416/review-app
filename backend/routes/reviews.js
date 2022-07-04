const express = require("express");
const router = express.Router();

const { getAllReviews } = require("../controllers/reviewsController");

// get all reviews
router.get("/", getAllReviews);

// get single review
// router.get("/:id", getReview);

module.exports = router;
