
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");
const Admin = require("./models/Admin");

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
  })
);

// Parse JSON requests
app.use(express.json({ limit: "10kb" }));

// General API rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later."
  }
});

// Login rate limiter
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts. Try again later."
  }
});

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running successfully!"
  });
});

// API routes
app.use("/api/auth/login", loginLimiter);
app.use("/api", apiLimiter);

app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

// Start server
const startServer = async () => {
  try {
    // Check environment variables
    const requiredVariables = [
      "MONGO_URI",
      "JWT_SECRET",
      "ADMIN_EMAIL",
      "ADMIN_PASSWORD",
      "CLIENT_URL"
    ];

    const missingVariables = requiredVariables.filter(
      (key) => !process.env[key] || !process.env[key].trim()
    );

    if (missingVariables.length > 0) {
      console.error("Missing environment variables:", missingVariables);
      throw new Error("Please check your server/.env file");
    }

    if (process.env.JWT_SECRET.length < 32) {
      throw new Error("JWT_SECRET must contain at least 32 characters");
    }

    if (
      !process.env.MONGO_URI.startsWith("mongodb://") &&
      !process.env.MONGO_URI.startsWith("mongodb+srv://")
    ) {
      throw new Error("MONGO_URI must be a valid MongoDB connection string");
    }

    // Connect database
    await connectDB();

    // Create initial admin if it does not exist
    const email = process.env.ADMIN_EMAIL.toLowerCase().trim();

    const existingAdmin = await Admin.findOne({ email });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(
        process.env.ADMIN_PASSWORD,
        12
      );

      await Admin.create({
        email,
        password: hashedPassword
      });

      console.log("Initial admin account created successfully");
    } else {
      console.log("Admin account already exists");
    }

    // Start listening
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();


