const express = require("express");

const router = express.Router();

// get all reviews
router.get("/", (req, res) => {
  res.send("all reviews route");
});

// get single review
// router.get("/:id", getReview);

module.exports = router;
