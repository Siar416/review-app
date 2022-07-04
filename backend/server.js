require("dotenv").config();
const express = require("express");

const reviewRoutes = require("./routes/reviews");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/reviews", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
