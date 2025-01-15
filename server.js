// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not specified in .env

// Middleware
app.use(cors()); // Allow cross-origin requests (important for frontend-backend communication)
app.use(bodyParser.json()); // Parse JSON bodies

// Placeholder data for simplicity (can be replaced with database integration)
let chatHistory = [];
let graphData = {
    subject: "CSRD Compliance",
    graph: "CO2 Compliance",
    data: [1000, 950, 900, 850, 800, 750, 700, 650, 600], // Example emissions data
};

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Ecovolve Backend!");
});

// Endpoint to fetch chat history
app.get("/api/chats", (req, res) => {
    res.json(chatHistory);
});

// Endpoint to save a new chat
app.post("/api/chats", (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required." });
    }
    const newChat = { id: chatHistory.length + 1, title, description };
    chatHistory.push(newChat);
    res.status(201).json(newChat);
});

// Endpoint to fetch graph data
app.get("/api/graph", (req, res) => {
    res.json(graphData);
});

// Endpoint to update graph filters
app.post("/api/graph", (req, res) => {
    const { subject, graph } = req.body;
    if (!subject || !graph) {
        return res.status(400).json({ error: "Subject and graph type are required." });
    }
    graphData.subject = subject;
    graphData.graph = graph;
    res.json({ message: "Graph filters updated successfully.", graphData });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
