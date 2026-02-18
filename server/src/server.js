require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});