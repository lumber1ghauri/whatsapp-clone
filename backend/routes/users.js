const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the User model

// Route to fetch all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Send the data back as JSON
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle errors
  }
});

module.exports = router;
