const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Get all messages (Optional, for debugging purposes)

// Get all messages for a specific chat
router.get('/:chatId', async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId });

    if (!messages) {
      return res.status(404).json({ message: 'Messages not found' });
    }

    res.json(messages); // Send the messages back to the client
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
// Add a new message
router.post("/", async (req, res) => {
  try {
    const { chatId, sender, message } = req.body;
    const newMessage = new Message({ chatId, sender, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
