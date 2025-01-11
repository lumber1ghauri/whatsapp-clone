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

router.post("/", async (req, res) => {
  try {
    const { name, phone, status, profilePic } = req.body;

    // Validate required fields
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required" });
    }

    // Create a new user
    const newUser = new User({
      name,
      phone,
      status: status || "Hey there! I am using WhatsApp.",
      profilePic: profilePic || "default.png",
    });

    // Save to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
