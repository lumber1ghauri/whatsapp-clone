require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users"); // Import user routes
const messageRoutes = require("./routes/messages"); // Import message routes
const http = require("http");
const { Server } = require("socket.io");
const Message = require("./models/Message"); // Import the Message model

const app = express(); // Initialize the app
const PORT = process.env.PORT || 5050; // Backend server port
const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000; // Frontend port

// CORS configuration to allow frontend from localhost:3000
const corsOptions = {
  origin: `http://localhost:${FRONTEND_PORT}`, // Dynamically allow frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type"], // Allowed headers
};
app.use(cors(corsOptions)); // Apply CORS middleware

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use Routes
app.use("/api/users", userRoutes); // Mount the users route
app.use("/api/messages", messageRoutes); // Mount the messages route

// Create HTTP server
const server = http.createServer(app);

// Configure Socket.IO with CORS
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${FRONTEND_PORT}`, // Allow frontend origin
    methods: ["GET", "POST"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type"], // Allowed headers
  },
});

// Socket.IO events
io.on("connection", async (socket) => {
  console.log(`A user connected with socket ID: ${socket.id}`);

  // Fetch and send all messages when a user connects
  try {
    const messages = await Message.find();
    socket.emit("initialMessages", messages);
  } catch (error) {
    console.error("Error fetching messages from database:", error);
  }

  // Listen for "sendMessage" event
  socket.on("sendMessage", async (message) => {
    console.log("Message received:", message);

    // Save the message to the database
    try {
      const newMessage = new Message(message);
      console.log("Attempting to save message to database:", newMessage);
      await newMessage.save();
      console.log("Message saved to database:", newMessage);

      // Broadcast the message to all connected clients
      io.emit("receiveMessage", newMessage);
    } catch (error) {
      console.error("Error saving message to database:", error);
    }
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log(`User with socket ID ${socket.id} disconnected`);
  });
});

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start the Server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});