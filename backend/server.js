require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users"); // Import user routes
const messageRoutes = require("./routes/messages"); // Import message routes
const app = express(); // Initialize the app
const PORT = process.env.PORT || 5050;
// CORS configuration to allow frontend from localhost:3000
const corsOptions = {
  origin: "http://localhost:3000",  // Allow frontend to access the backend
  methods: ["GET", "POST" , "PUT" , "DELETE"],         // Allow these HTTP methods
  allowedHeaders: ["Content-Type"], // Allow Content-Type header
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
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app); // Use HTTP server with Express
const io = new Server(server);
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("sendMessage", (message) => {
    // Broadcast the message to all connected clients
    io.emit("receiveMessage", message);
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
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