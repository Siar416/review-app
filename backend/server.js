require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const reviewRoutes = require("./routes/reviews");

// express app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/reviews", reviewRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to db and listening on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
